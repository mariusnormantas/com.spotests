/** @format */

import React from "react";
import { SearchInput } from "@/library/core";
import { useDebounceState } from "@/library/hooks";
import { useListingContext } from "../../use-listing-context";
import * as sc from "./ListingTableToolbar.styled";

const _ListingTableToolbar: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const context = useListingContext();
  const [search, setSearch] = useDebounceState(
    context.search,
    context.setSearch
  );

  // Checks, if search is visible, so we should show toolbar.
  if (!context.searchable) return null;
  return (
    <sc.Component>
      <sc.Search
        as={SearchInput}
        variant="outline"
        value={search}
        placeholder={context.searchPlaceholder}
        disabled={!search && !context.isReady}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      />
    </sc.Component>
  );
};

export const ListingTableToolbar = React.memo(_ListingTableToolbar);
ListingTableToolbar.displayName = "@/library/listing/ListingTableToolbar";
