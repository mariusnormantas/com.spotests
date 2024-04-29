/** @format */

import React from "react";
import {
  TrainerInteractionsListingContext,
  TrainerInteractionsListingProviderReturn,
} from "../contexts";

export const useTrainerInteractionsListingContext =
  (): TrainerInteractionsListingProviderReturn => {
    const context = React.useContext<TrainerInteractionsListingProviderReturn>(
      TrainerInteractionsListingContext
    );
    if (!context) {
      throw new Error(
        "useTrainerInteractionsListingContext was called outside of TrainerInteractionsListingProvider context."
      );
    }
    return context;
  };
