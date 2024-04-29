/** @format */

import React from "react";
import { Checkbox } from "@/library/core";
import { useButtonState } from "@/library/hooks";
import { useListingContext } from "../../use-listing-context";
import { ListingBodyItemProps } from "./types";
import * as sc from "./ListingBodyItem.styled";

const _ListingBodyItem = <T,>({ document }: ListingBodyItemProps<T>) => {
  // Initializes component's states, hooks and etc.
  const context = useListingContext();
  const buttonState = useButtonState();

  // Memoized state, when document is available for click.
  const isClickable = React.useMemo(() => {
    return context.isReady && context.clickable;
  }, [context]);

  // Memoized state, when document is available for selection.
  const isSelectable = React.useMemo(() => {
    return context.isReady && context.selectable && !context.isDisabledSelect;
  }, [context]);

  // Memoized document's content.
  const contentNode = React.useMemo(() => {
    if (context.render) {
      return context.render(document);
    }
    return typeof document === "string" ? document.toString() : null;
  }, [context, document]);

  // Memoized select checkbox node.
  const selectCheckboxNode = React.useMemo(() => {
    if (!context.selectable) return null;
    return (
      <Checkbox
        checked={context.isSelected(document)}
        disabled={!isSelectable}
        onClick={(e) => e.stopPropagation()}
        onChange={() => context.handleSelectDocument(document)}
      />
    );
  }, [context, document, isSelectable]);

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
      <sc.Content ref={buttonState.ref}>{contentNode}</sc.Content>
      <sc.Actions>{selectCheckboxNode}</sc.Actions>
    </sc.Component>
  );
};

export const ListingBodyItem = React.memo(_ListingBodyItem);
ListingBodyItem.displayName = "@/library/listing/ListingBodyItem";
