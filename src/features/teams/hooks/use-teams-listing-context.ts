/** @format */

import React from "react";
import { TeamsListingContext, TeamsListingProviderReturn } from "../contexts";

export const useTeamsListingContext = (): TeamsListingProviderReturn => {
  const context =
    React.useContext<TeamsListingProviderReturn>(TeamsListingContext);
  if (!context) {
    throw new Error(
      "useTeamsListingContext was called outside of TeamsListingProvider context."
    );
  }
  return context;
};
