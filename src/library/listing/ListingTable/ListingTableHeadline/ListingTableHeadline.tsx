/** @format */

import React from "react";
import { useListingContext } from "../../use-listing-context";
import * as sc from "./ListingTableHeadline.styled";

const _ListingTableHeadline: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const context = useListingContext();

  // Checks, if listing has defined headline.
  if (!context.headline) return null;
  return (
    <sc.Component data-component="listing-headline">
      <sc.Headline>{context.headline}</sc.Headline>
    </sc.Component>
  );
};

export const ListingTableHeadline = React.memo(_ListingTableHeadline);
ListingTableHeadline.displayName = "@/library/listing/ListingTableHeadline";
