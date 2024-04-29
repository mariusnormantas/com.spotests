/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { t } from "i18next";
import { ListingTable, useListing } from "@/library/listing";
import { useDashboardLinks } from "@/features/dashboard";
import { useTeamsListingContext } from "../../hooks";
import { TeamsListingTableProps } from "./types";
import * as sc from "./TeamsListingTable.styled";

export const TeamsListingTable: React.FC<TeamsListingTableProps> = (props) => {
  // Initializes component's states, hooks and etc.
  const navigate = useNavigate();
  const links = useDashboardLinks();
  const context = useTeamsListingContext();
  const listing = useListing({
    ...context,
    columns: [
      {
        label: t("Name"),
        key: "name",
      },
      {
        label: t("Trainers"),
        key: "trainersCount",
        render: (document) => {
          return t("{{count}} trainer(-s)", { count: document.trainersCount });
        },
      },
      {
        label: t("Athletes"),
        key: "athletesCount",
        render: (document) => {
          return t("{{count}} athlete(-s)", { count: document.athletesCount });
        },
      },
      {
        label: t("Created at"),
        key: "createdAt",
        render: (document) => {
          const createdAt = new Date(document.createdAt);
          return format(createdAt, "yyyy-MM-dd, HH:mm");
        },
      },
    ],
    onClickDocument: (document) => {
      navigate(`${links.teams}/${document._id}`);
    },
    ...props,
  });

  return <sc.Table as={ListingTable} listing={listing} />;
};
