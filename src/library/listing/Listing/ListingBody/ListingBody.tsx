/** @format */

import React from "react";
import { t } from "i18next";
import { useListingContext } from "../../use-listing-context";
import { ListingBodyItem } from "../ListingBodyItem";
import * as sc from "./ListingBody.styled";
import * as itemSc from "../ListingBodyItem/ListingBodyItem.styled";

const _ListingBody: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const context = useListingContext();

  // Memoized body items node.
  const bodyItemsNode = React.useMemo(() => {
    return context.documents.map((document, key) => (
      <ListingBodyItem key={key} document={document} />
    ));
  }, [context.documents]);

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
          <sc.Loading>{t("Please wait")}</sc.Loading>
        )}
        {!context.documents.length && context.isReady && key === 0 && (
          <sc.NotFound>{t("No documents found")}</sc.NotFound>
        )}
      </itemSc.Component>
    ));
  }, [context.documents.length, context.fillableRows, context.isReady]);

  return (
    <sc.Component
      role="list"
      data-component="listing-body"
      $rowSize={context.rowSize}
      $bodySize={context.bodySize ?? context.limit}>
      {bodyItemsNode}
      {fillableRowsNode}
    </sc.Component>
  );
};

export const ListingBody = React.memo(_ListingBody);
ListingBody.displayName = "@/library/listing/ListingBody";
