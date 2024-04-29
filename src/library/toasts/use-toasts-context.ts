/** @format */

import React from "react";
import { ToastsContext } from "./ToastsProvider";

export const useToastsContext = () => {
  // Initializes component's states, hooks and etc.
  const context = React.useContext(ToastsContext);
  if (!context) {
    throw new Error(
      "useToastsContext was called outside of ToastsProvider context."
    );
  }
  return context;
};
