/** @format */

import React from "react";
import { Checkbox } from "@/library/core";
import { useButtonState } from "@/library/hooks";
import { useListingContext } from "../../use-listing-context";
import { ListingTableBodyItemProps } from "./types";
import * as sc from "./ListingTableBodyItem.styled";

const _ListingTableBodyItem: React.FC<ListingTableBodyItemProps> = ({
  document,
}) => {
  // Initializes component's states, hooks and etc.
  const context = useListingContext();
  const buttonState = useButtonState();

  // Memoized state, when document is available for click.
  const isClickable = React.useMemo(() => {
    return context.clickable && context.isReady;
  }, [context]);

  // Memoized state, when document is available for selection.
  const isSelectable = React.useMemo(() => {
    return (
      (context.isReady && context.selectable && !context.isDisabledSelect) ||
      context.isSelected(document)
    );
  }, [context, document]);

  const jsxColumnProps = React.useMemo(
    () => ({
      "data-is-hovered": buttonState.isHovered
        ? buttonState.isHovered
        : undefined,
      "data-is-pressed": buttonState.isPressed
        ? buttonState.isPressed
        : undefined,
    }),
    [buttonState.isHovered, buttonState.isPressed]
  );

  // Memoized document's content.
  const contentNode = React.useMemo(() => {
    return context.columns.map((column, key) => {
      const node = column.render?.(document);

      // When column has no "render" method or render method returns not JSX.
      if (!React.isValidElement(node)) {
        if (column.field) {
          return (
            <sc.Column.Base key={key} data-column="true">
              {context.renderColumn(column, document)}
            </sc.Column.Base>
          );
        }
        return (
          <sc.Column.Base key={key} data-column="true">
            <sc.Column.Inner>
              {context.renderColumn(column, document)}
            </sc.Column.Inner>
          </sc.Column.Base>
        );
      }

      // Clones JSX column's element and patches specific props.
      const cloned = React.cloneElement(node, {
        ...node.props,
        ...jsxColumnProps,
      });
      return (
        <sc.Column.Base key={key} data-column="true">
          {column.field ? cloned : <sc.Column.Inner>{cloned}</sc.Column.Inner>}
        </sc.Column.Base>
      );
    });
  }, [context, document, jsxColumnProps]);

  // Memoized select checkbox node.
  const selectCheckboxNode = React.useMemo(() => {
    if (!context.selectable) return null;
    return (
      <sc.Checkbox
        as={Checkbox}
        checked={context.isSelected(document)}
        disabled={!isSelectable}
        onClick={(e) => e.stopPropagation()}
        onChange={() => context.handleSelectDocument(document)}
      />
    );
  }, [context, document, isSelectable]);

  // Memoized management's state and count of actions.
  const hasManagement = React.useMemo(() => {
    if (!context.management) return false;
    return context.management.length;
  }, [context.management]);

  // Memoized management's node.
  const managementNode = React.useMemo(() => {
    if (!context.management) return null;
    return context.management.map(({ conditional, node }, key) => {
      if (typeof conditional !== "undefined" && !conditional) return null;
      return <sc.Column.Base key={key}>{node(document)}</sc.Column.Base>;
    });
  }, [context.management, document]);

  // Callback, which handles click event on the item.
  const handleClick = React.useCallback(() => {
    if (isClickable) {
      context.handleClickDocument(document);
    } else if (isSelectable) {
      context.handleSelectDocument(document);
    }
  }, [context, document, isClickable, isSelectable]);

  return (
    <sc.Component
      role="listitem"
      data-row="true"
      aria-selected={context.isSelected(document)}
      onClick={handleClick}
      $isHovered={(isClickable || isSelectable) && buttonState.isHovered}
      $isPressed={(isClickable || isSelectable) && buttonState.isPressed}>
      <sc.SelectBox
        data-select="true"
        onClick={(event) => event.stopPropagation()}>
        {selectCheckboxNode}
      </sc.SelectBox>
      <sc.Grid ref={buttonState.ref} data-grid="true">
        {contentNode}
      </sc.Grid>
      {hasManagement && (
        <sc.ManagementBox
          data-management="true"
          onClick={(event) => event.stopPropagation()}
          $actionsCount={hasManagement}>
          {managementNode}
        </sc.ManagementBox>
      )}
    </sc.Component>
  );
};

export const ListingTableBodyItem = React.memo(_ListingTableBodyItem);
ListingTableBodyItem.displayName = "@/library/listing/ListingTableBodyItem";
