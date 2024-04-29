/** @format */

import React from "react";
import { t } from "i18next";
import { Checkbox } from "@/library/core";
import { useListingContext } from "../../use-listing-context";
import { ListingTableBodyItem } from "../ListingTableBodyItem";
import * as sc from "./ListingTableBody.styled";
import * as itemSc from "../ListingTableBodyItem/ListingTableBodyItem.styled";

const _ListingTableBody: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const context = useListingContext();

  // Memoized body items node.
  const bodyItemsNode = React.useMemo(() => {
    return context.documents.map((document, key) => (
      <ListingTableBodyItem key={key} document={document} />
    ));
  }, [context.documents]);

  // Memoized management's state and count of actions.
  const hasManagement = React.useMemo(() => {
    if (!context.management) return false;
    return context.management.length;
  }, [context.management]);

  // Memoized fillable rows node.
  const fillableRowsNode = React.useMemo(() => {
    return context.fillableRows.map((_, key) => (
      <itemSc.Component
        key={key}
        role="listitem"
        data-row="true"
        $isHovered={false}
        $isPressed={false}>
        {!context.documents.length && !context.isReady && key === 0 && (
          <itemSc.Column.Base as={sc.Loading} data-column="true">
            {t("Please wait")}
          </itemSc.Column.Base>
        )}
        {!context.documents.length && context.isReady && key === 0 && (
          <itemSc.Column.Base as={sc.NotFound} data-column="true">
            {t("No documents found")}
          </itemSc.Column.Base>
        )}
        {context.variant === "grid" &&
          context.isReady &&
          context.documents.length > 0 && (
            <React.Fragment>
              <itemSc.SelectBox data-select="true">
                {context.selectable && (
                  <itemSc.Checkbox as={Checkbox} disabled hidden />
                )}
              </itemSc.SelectBox>
              <itemSc.Grid data-grid="true">
                {context.columns.map((_, key) => (
                  <itemSc.Column.Base key={key} data-column="true" />
                ))}
              </itemSc.Grid>
              {hasManagement && (
                <itemSc.ManagementBox
                  data-management="true"
                  $actionsCount={hasManagement}
                />
              )}
            </React.Fragment>
          )}
      </itemSc.Component>
    ));
  }, [
    context.columns,
    context.documents.length,
    context.fillableRows,
    context.isReady,
    context.selectable,
    context.variant,
    hasManagement,
  ]);

  return (
    <sc.Component
      role="list"
      data-component="listing-body"
      $variant={context.variant}
      $rowSize={context.rowSize}
      $bodySize={context.bodySize ?? context.limit}>
      {bodyItemsNode}
      {fillableRowsNode}
    </sc.Component>
  );
};

export const ListingTableBody = React.memo(_ListingTableBody);
ListingTableBody.displayName = "@/library/listing/ListingTableBody";
