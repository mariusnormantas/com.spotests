/** @format */

import React from "react";
import { AuthContext, UseAuthContextReturn } from "../contexts";

export const useAuthContext = (): UseAuthContextReturn => {
  const context = React.useContext<UseAuthContextReturn>(AuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext was called outside of AuthProvider context."
    );
  }
  return context;
};
