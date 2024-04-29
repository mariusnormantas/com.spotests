/** @format */

import React from "react";
import { ListingContext } from "./ListingProvider";
import { UseListingReturn } from "./types";

export const useListingContext = <T = unknown>(): UseListingReturn<T> => {
  // Initializes component's states, hooks and etc.
  const context = React.useContext<UseListingReturn<T>>(ListingContext);

  // Checks, if context requested inside of it's provider.
  if (!context) {
    throw new Error(
      "useListingContext was called outside of ListingProvider context."
    );
  }
  return context;
};
