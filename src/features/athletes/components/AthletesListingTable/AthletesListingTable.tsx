/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { t } from "i18next";
import { Badge } from "@/library/core";
import { ListingTable, useListing } from "@/library/listing";
import { useDashboardLinks } from "@/features/dashboard";
import { useAthletesListingContext } from "../../hooks";
import { AthletesListingTableProps } from "./types";
import * as sc from "./AthletesListingTable.styled";

export const AthletesListingTable: React.FC<AthletesListingTableProps> = (
  props
) => {
  // Initializes component's states, hooks and etc.
  const navigate = useNavigate();
  const links = useDashboardLinks();
  const context = useAthletesListingContext();
  const listing = useListing({
    ...context,
    columns: [
      {
        label: t("Name"),
        render: (document) => (
          <sc.Name>
            <span>{document.name}</span>
          </sc.Name>
        ),
      },
      {
        label: t("Email address"),
        key: "email",
      },
      {
        label: t("Lock"),
        render: (document) => (
          <Badge
            variant={document.locked ? "danger" : "neutral"}
            shape="circular">
            {document.locked ? t("Locked") : t("Unlocked")}
          </Badge>
        ),
      },
      {
        label: t("Verified at"),
        render: (document) => {
          if (document.verifiedAt) {
            const createdAt = new Date(document.verifiedAt);
            return format(createdAt, "yyyy-MM-dd, HH:mm");
          }
          return t("Not verified");
        },
      },
      {
        label: t("Created at"),
        render: (document) => {
          const createdAt = new Date(document.createdAt);
          return format(createdAt, "yyyy-MM-dd, HH:mm");
        },
      },
    ],
    onClickDocument: (document) => {
      navigate(`${links.athletes}/${document._id}`);
    },
    ...props,
  });
  return <sc.Table as={ListingTable} listing={listing} />;
};
