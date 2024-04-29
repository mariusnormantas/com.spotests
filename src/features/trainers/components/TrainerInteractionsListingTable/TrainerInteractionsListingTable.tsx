/** @format */

import React from "react";
import { format } from "date-fns";
import { t } from "i18next";
import { ListingTable, useListing } from "@/library/listing";
import { useTrainerInteractionsListingContext } from "../../hooks";
import { TrainerInteractionsListingTableProps } from "./types";
import * as sc from "./TrainerInteractionsListingTable.styled";

export const TrainerInteractionsListingTable: React.FC<
  TrainerInteractionsListingTableProps
> = (props) => {
  // Initializes component's states, hooks and etc.
  const context = useTrainerInteractionsListingContext();
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
