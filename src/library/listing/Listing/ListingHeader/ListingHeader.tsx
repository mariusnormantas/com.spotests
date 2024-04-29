/** @format */

import React from "react";
import { SearchInput } from "@/library/core";
import { useDebounceState } from "@/library/hooks";
import { useListingContext } from "../../use-listing-context";
import * as sc from "./ListingHeader.styled";

const _ListingHeader: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const context = useListingContext();
  const [value, setDebouncedState] = useDebounceState(
    context.search,
    context.setSearch
  );

  // Checks, if search is visible, so we should show toolbar.
  // if (!context.searchable && !context.headline) return null;
  return (
    <sc.Component data-component="listing-search">
      {context.headline && (
        <sc.Headline.Container>
          <sc.Headline.Label>{context.headline}</sc.Headline.Label>
        </sc.Headline.Container>
      )}
      {context.searchable && (
        <sc.Search
          as={SearchInput}
          value={value}
          placeholder={context.searchPlaceholder}
          disabled={!value && !context.isReady}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDebouncedState(e.target.value)
          }
          $hasHeadline={!!context.headline}
        />
      )}
    </sc.Component>
  );
};

export const ListingHeader = React.memo(_ListingHeader);
ListingHeader.displayName = "@/library/listing/ListingHeader";
