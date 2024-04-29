/** @format */

import React from "react";
import { UsePopoverReturn } from "./types";

export const PopoverContext = React.createContext<UsePopoverReturn>(null);

export const usePopoverContext = () => {
  const context = React.useContext(PopoverContext);
  if (!context) {
    throw new Error(
      "usePopoverContext was called outside of PopoverProvider context."
    );
  }
  return context;
};
