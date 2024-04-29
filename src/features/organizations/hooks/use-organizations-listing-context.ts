/** @format */

import React from "react";
import {
  OrganizationsListingContext,
  OrganizationsListingProviderReturn,
} from "../contexts";

export const useOrganizationsListingContext =
  (): OrganizationsListingProviderReturn => {
    const context = React.useContext<OrganizationsListingProviderReturn>(
      OrganizationsListingContext
    );
    if (!context) {
      throw new Error(
        "useOrganizationsListingContext was called outside of OrganizationsListingProvider context."
      );
    }
    return context;
  };
