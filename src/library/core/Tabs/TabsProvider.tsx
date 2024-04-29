/** @format */

import React from "react";
import { TabsProviderProps, TabsProviderReturn } from "./types";

export const TabsContext = React.createContext<TabsProviderReturn>(
  {} as TabsProviderReturn
);

export const TabsProvider: React.FC<TabsProviderProps> = ({
  defaultValue = "",
  children,
  ...rest
}) => {
  // Initializes component's hooks, states and etc.
  const [active, setActive] = React.useState(defaultValue);

  return (
    <TabsContext.Provider value={{ defaultValue, active, setActive, ...rest }}>
      {children}
    </TabsContext.Provider>
  );
};
