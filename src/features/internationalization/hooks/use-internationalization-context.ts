/** @format */

import React from "react";
import {
  InternationalizationContext,
  InternationalizationProviderReturn,
} from "../contexts";

export const useInternationalizationContext =
  (): InternationalizationProviderReturn => {
    const context = React.useContext<InternationalizationProviderReturn>(
      InternationalizationContext
    );
    if (!context) {
      throw new Error(
        "useInternationalizationContext was called outside of InternationalizationProvider context."
      );
    }
    return context;
  };
