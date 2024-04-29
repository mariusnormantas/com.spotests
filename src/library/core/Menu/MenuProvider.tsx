/** @format */

import React from "react";
import { usePopoverContext } from "../Popover";
import { MenuProviderProps, MenuProviderReturn } from "./types";

export const MenuContext = React.createContext<MenuProviderReturn>(
  {} as MenuProviderReturn
);

export const MenuProvider: React.FC<MenuProviderProps> = ({
  autoClose = true,
  children,
}) => {
  // Initializes component's hooks, states and etc.
  const popover = usePopoverContext();
  return (
    <MenuContext.Provider value={{ popover, autoClose }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  const context = React.useContext(MenuContext);
  if (!context) {
    throw new Error(
      "useMenuContext was called outside of MenuProvider context."
    );
  }
  return context;
};
