/** @format */

import React from "react";
import { ModalsContext } from "./ModalsProvider";

export const useModalsContext = () => {
  // Initializes component's states, hooks and etc.
  const context = React.useContext(ModalsContext);
  if (!context) {
    throw new Error(
      "useModalsContext was called outside of ModalsProvider context."
    );
  }
  return context;
};
