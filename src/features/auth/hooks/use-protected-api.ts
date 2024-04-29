/** @format */

import React from "react";
import { apiClient } from "@/api";
import { useAuthContext } from "../hooks";
import { useRefreshToken } from "./use-refresh-token";

export const useProtectedApi = () => {
  // Initializes component's states, hooks and etc.
  const refreshToken = useRefreshToken();
  const { accessToken, user } = useAuthContext();

  // Setups interceptors when refresh token is in need to be updated.
  React.useLayoutEffect(() => {
    // Request interceptors.
    const requestIntercept = apiClient.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        config.headers["X-User"] = user?._id;
        return config;
      },
      async (error) => {
        return Promise.reject(error);
      }
    );

    // Response inteceptors.
    const responseIntercept = apiClient.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error?.config;
        if (error.response.status === 403 && !originalRequest.sent) {
          originalRequest.sent = true;
          const token = await refreshToken();
          originalRequest.headers["Authorization"] = `Bearer ${token}`;
          return apiClient(originalRequest);
        }
        return Promise.reject(error);
      }
    );

    // Clears interceptors after request runs.
    return () => {
      apiClient.interceptors.request.eject(requestIntercept);
      apiClient.interceptors.response.eject(responseIntercept);
    };
  }, [user, accessToken, refreshToken]);

  return apiClient;
};
