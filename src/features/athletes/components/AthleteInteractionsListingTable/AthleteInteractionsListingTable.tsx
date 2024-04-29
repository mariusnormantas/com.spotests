/** @format */

import React from "react";
import { format } from "date-fns";
import { t } from "i18next";
import { ListingTable, useListing } from "@/library/listing";
import { useAthleteInteractionsListingContext } from "../../hooks";
import { AthleteInteractionsListingTableProps } from "./types";
import * as sc from "./AthleteInteractionsListingTable.styled";

export const AthleteInteractionsListingTable: React.FC<
  AthleteInteractionsListingTableProps
> = (props) => {
  // Initializes component's states, hooks and etc.
  const context = useAthleteInteractionsListingContext();
  const listing = useListing({
    ...context,
    columns: [
      {
        label: t("Interaction"),
        render: (document) => t(document.title),
      },
      {
        label: t("Description"),
        render: (document) => t(document.description),
      },
      {
        label: t("Responsible"),
        key: "author",
      },
      {
        label: t("Created at"),
        key: "createdAt",
        render: (document) =>
          format(new Date(document.createdAt), "yyyy-MM-dd, HH:mm"),
      },
    ],
    ...props,
  });
  return <sc.Table as={ListingTable} listing={listing} />;
};
