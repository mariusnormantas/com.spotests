/** @format */

import React from "react";
import {
  ManageTrainersListingContext,
  ManageTrainersListingProviderReturn,
} from "../contexts";

export const useManageTrainersListingContext =
  (): ManageTrainersListingProviderReturn => {
    const context = React.useContext<ManageTrainersListingProviderReturn>(
      ManageTrainersListingContext
    );
    if (!context) {
      throw new Error(
        "useManageTrainersListingContext was called outside of ManageTrainersListingProvider context."
      );
    }
    return context;
  };
