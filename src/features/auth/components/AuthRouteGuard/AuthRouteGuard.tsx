/** @format */

import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { RedirectAuthenticated } from "../RedirectAuthenticated";
import { useAuthContext } from "../../hooks";
import { AuthRouteGuardProps } from "./types";

export const AuthRouteGuard: React.FC<AuthRouteGuardProps> = ({
  type,
  roles,
}) => {
  // Initializes component's states, hooks and etc.
  const { accessToken, user } = useAuthContext();

  // Redirects, when required authenticated users, but there is guest.
  if (!accessToken && type === "user") {
    return <Navigate to="/login" replace />;
  }

  // Redirects, when required guests, but there is authenticated user.
  else if (accessToken && type === "guest") {
    return <RedirectAuthenticated />;
  }

  // Checks if user match required roles.
  else if (user && roles && !roles.includes(user.role)) {
    return <RedirectAuthenticated />;
  }

  return <Outlet />;
};
