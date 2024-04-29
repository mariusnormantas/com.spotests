/** @format */

import React from "react";
import { format } from "date-fns";
import { t } from "i18next";
import { ListingTable, useListing } from "@/library/listing";
import { useTeamInteractionsListingContext } from "../../hooks";
import { TeamInteractionsListingTableProps } from "./types";
import * as sc from "./TeamInteractionsListingTable.styled";

export const TeamInteractionsListingTable: React.FC<
  TeamInteractionsListingTableProps
> = (props) => {
  // Initializes component's states, hooks and etc.
  const context = useTeamInteractionsListingContext();
  const listing = useListing({
    ...context,
    columns: [
      {
        label: t("Interaction"),
        render: (document) => {
          return t(document.title);
        },
      },
      {
        label: t("Description"),
        render: (document) => {
          return t(document.description);
        },
      },
      {
        label: t("Responsible"),
        key: "author",
      },
      {
        label: t("Created at"),
        key: "createdAt",
        render: (document) => {
          return format(new Date(document.createdAt), "yyyy-MM-dd, HH:mm");
        },
      },
    ],
    ...props,
  });

  return <sc.Table as={ListingTable} listing={listing} />;
};
