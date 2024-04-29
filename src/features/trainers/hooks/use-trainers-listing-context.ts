/** @format */

import React from "react";
import {
  TrainersListingContext,
  TrainersListingProviderReturn,
} from "../contexts";

export const useTrainersListingContext = (): TrainersListingProviderReturn => {
  const context = React.useContext<TrainersListingProviderReturn>(
    TrainersListingContext
  );
  if (!context) {
    throw new Error(
      "useTrainersListingContext was called outside of TrainersListingProvider context."
    );
  }
  return context;
};
