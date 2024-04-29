/** @format */

import React from "react";
import { t } from "i18next";
import { useListingContext } from "../../use-listing-context";
import { ListingTablePagination } from "../ListingTablePagination";
import * as sc from "./ListingTableFooter.styled";

const _ListingTableFooter: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const context = useListingContext();

  // Checks, if footer should be rendered.
  if (!context.showFooter) return null;
  return (
    <sc.Component data-component="listing-footer">
      <sc.Container>
        <sc.Showing>
          {t("Showing from {{from}} to {{to}} of {{of}}", {
            from: context.total > 0 ? context.showing[0] : 0,
            to: context.showing[1],
            of: context.total,
          })}
        </sc.Showing>
        <ListingTablePagination />
      </sc.Container>
    </sc.Component>
  );
};

export const ListingTableFooter = React.memo(_ListingTableFooter);
ListingTableFooter.displayName = "@/library/listing/ListingTableFooter";
