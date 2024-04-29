/** @format */

import React from "react";
import {
  ManageAthletesListingContext,
  ManageAthletesListingProviderReturn,
} from "../contexts";

export const useManageAthletesListingContext =
  (): ManageAthletesListingProviderReturn => {
    const context = React.useContext<ManageAthletesListingProviderReturn>(
      ManageAthletesListingContext
    );
    if (!context) {
      throw new Error(
        "useManageAthletesListingContext was called outside of ManageAthletesListingProvider context."
      );
    }
    return context;
  };
