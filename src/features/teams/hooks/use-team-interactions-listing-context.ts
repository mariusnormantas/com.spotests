/** @format */

import React from "react";
import {
  TeamInteractionsListingContext,
  TeamInteractionsListingProviderReturn,
} from "../contexts";

export const useTeamInteractionsListingContext =
  (): TeamInteractionsListingProviderReturn => {
    const context = React.useContext<TeamInteractionsListingProviderReturn>(
      TeamInteractionsListingContext
    );
    if (!context) {
      throw new Error(
        "useTeamInteractionsListingContext was called outside of TeamInteractionsListingProvider context."
      );
    }
    return context;
  };
