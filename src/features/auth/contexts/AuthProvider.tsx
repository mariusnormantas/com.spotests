/** @format */

import React from "react";
import jwtDecode from "jwt-decode";
import { AnimatePresence } from "framer-motion";
import { apiClient } from "@/api";
import { Loader } from "@/library/core";
import { UserData, AuthProviderProps, UseAuthContextReturn } from "./types";

// Creates a context to handle the data.
export const AuthContext = React.createContext<UseAuthContextReturn>(
  {} as UseAuthContextReturn
);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // Initializes component's states, hooks and etc.
  const [isLoading, setLoading] = React.useState(true);
  const [isLoggingOut, setLoggingOut] = React.useState(false);
  const [accessToken, setAccessToken] = React.useState<string | undefined>();

  // Decoded auth's data, such as _id and role.
  const user = React.useMemo((): UserData | undefined => {
    if (accessToken) {
      return jwtDecode(accessToken);
    }
    return undefined;
  }, [accessToken]);

  // Effect, which updates authenticated status and retrieves access token on page's load.
  React.useLayoutEffect(() => {
    // Method, which fetches authenticated status.
    const fetchInitialStatus = async () => {
      try {
        const response = await apiClient.get("/api/auth/v1/status");
        setAccessToken(response.data.accessToken);
      } finally {
        setLoading(false);
      }
    };
    // Checks, if access token do not exist.
    fetchInitialStatus();
  }, []);

  // Prevents from rendering before authentication's status is retrieved from server.
  if (isLoading) return null;
  return (
    <AuthContext.Provider
      value={{
        accessToken,
        setAccessToken,
        user,
        isLoggingOut,
        setLoggingOut,
      }}>
      <AnimatePresence>{isLoggingOut && <Loader />}</AnimatePresence>
      {children}
    </AuthContext.Provider>
  );
};
