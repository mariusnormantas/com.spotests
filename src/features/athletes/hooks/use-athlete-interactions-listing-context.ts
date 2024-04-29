/** @format */

import React from "react";
import {
  AthleteInteractionsListingContext,
  AthleteInteractionsListingProviderReturn,
} from "../contexts";

export const useAthleteInteractionsListingContext =
  (): AthleteInteractionsListingProviderReturn => {
    const context = React.useContext<AthleteInteractionsListingProviderReturn>(
      AthleteInteractionsListingContext
    );
    if (!context) {
      throw new Error(
        "useAthleteInteractionsListingContext was called outside of AthleteInteractionsListingProvider context."
      );
    }
    return context;
  };
