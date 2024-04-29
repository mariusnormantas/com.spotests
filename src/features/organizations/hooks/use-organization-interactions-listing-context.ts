/** @format */

import React from "react";
import {
  OrganizationInteractionsListingContext,
  OrganizationInteractionsListingProviderReturn,
} from "../contexts";

export const useOrganizationInteractionsListingContext =
  (): OrganizationInteractionsListingProviderReturn => {
    const context =
      React.useContext<OrganizationInteractionsListingProviderReturn>(
        OrganizationInteractionsListingContext
      );
    if (!context) {
      throw new Error(
        "useOrganizationInteractionsListingContext was called outside of OrganizationInteractionsListingProvider context."
      );
    }
    return context;
  };
