/** @format */

import React from "react";
import { DashboardContext, DashboardProviderReturn } from "../contexts";

export const useDashboardContext = (): DashboardProviderReturn => {
  const context = React.useContext<DashboardProviderReturn>(DashboardContext);
  if (!context) {
    throw new Error(
      "useDashboardContext was called outside of DashboardProvider context."
    );
  }
  return context;
};
