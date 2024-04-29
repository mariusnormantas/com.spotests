/** @format */

import React from "react";
import { TabsContext } from "./TabsProvider";
import { TabsProviderReturn } from "./types";

export const useTabsContext = (): TabsProviderReturn => {
  // Initializes component's states, hooks and etc.
  const context = React.useContext<TabsProviderReturn>(TabsContext);
  if (!context) {
    throw new Error(
      "useTabsContext was called outside of TabsProvider context."
    );
  }
  return context;
};
