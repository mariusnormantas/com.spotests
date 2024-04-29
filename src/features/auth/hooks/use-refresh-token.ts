/** @format */

import React from "react";
import { t } from "i18next";
import { apiClient } from "@/api";
import { useToasts } from "@/library/toasts";
import { useAuthContext } from "../hooks";
import { useLogoutMutation } from "../services";

export const useRefreshToken = () => {
  // Initializes component's states, hooks and etc.
  const logout = useLogoutMutation();
  const { setAccessToken } = useAuthContext();
  const { showToast } = useToasts();

  // Callback, which handles no token retrieved or error.
  const handleException = React.useCallback(() => {
    logout.mutate(null);
    showToast({
      id: "session",
      variant: "danger",
      message: t("Session has expired, please login to continue"),
    });
  }, [logout, showToast]); // was []

  // Retrieves access token for authorization.
  const refreshToken = async () => {
    try {
      const response = await apiClient.get("/api/auth/v1/refresh");
      if (!response.data.accessToken) {
        handleException();
        return;
      }
      setAccessToken(response.data.accessToken);
      return response.data.accessToken;
    } catch (error) {
      handleException();
    }
  };
  return refreshToken;
};
