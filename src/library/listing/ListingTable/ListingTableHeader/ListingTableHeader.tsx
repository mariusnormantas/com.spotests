/** @format */

import React from "react";
import { Checkbox } from "@/library/core";
import { useListingContext } from "../../use-listing-context";
import * as sc from "./ListingTableHeader.styled";

const _ListingTableHeader: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const context = useListingContext();

  // Memoized header's select checkbox node.
  const selectCheckboxNode = React.useMemo(() => {
    if (!context.selectable) return null;
    return <sc.Checkbox as={Checkbox} disabled={true} />;
  }, [context.selectable]);

  // Memoized header's columns node.
  const columnsNode = React.useMemo(() => {
    return context.columns.map((column, key) => (
      <sc.Column key={key} data-column="true">
        <span>{column.label}</span>
      </sc.Column>
    ));
  }, [context.columns]);

  // Memoized management's state and count of actions.
  const hasManagement = React.useMemo(() => {
    if (!context.management) return false;
    return context.management.length;
  }, [context.management]);

  return (
    <sc.Component
      data-component="listing-header"
      $variant={context.variant}
      $hasHeadline={!!context.headline}>
      <sc.SelectBox data-select="true">{selectCheckboxNode}</sc.SelectBox>
      <sc.Grid data-grid="true">{columnsNode}</sc.Grid>
      {hasManagement && (
        <sc.ManagementBox data-management="true" $actionsCount={hasManagement}>
          <sc.Column data-column="true" />
        </sc.ManagementBox>
      )}
    </sc.Component>
  );
};

export const ListingTableHeader = React.memo(_ListingTableHeader);
ListingTableHeader.displayName = "@/library/listing/ListingTableHeader";
