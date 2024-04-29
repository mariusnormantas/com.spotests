/** @format */

import React from "react";
import {
  AthletesListingContext,
  AthletesListingProviderReturn,
} from "../contexts";

export const useAthletesListingContext = (): AthletesListingProviderReturn => {
  const context = React.useContext<AthletesListingProviderReturn>(
    AthletesListingContext
  );
  if (!context) {
    throw new Error(
      "useAthletesListingContext was called outside of AthletesListingProvider context."
    );
  }
  return context;
};
