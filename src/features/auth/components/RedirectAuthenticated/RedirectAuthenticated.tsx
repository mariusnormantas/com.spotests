/** @format */

import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../hooks";

export const RedirectAuthenticated: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const { user } = useAuthContext();

  // Redirects user to it's landing page on dashboard.
  if (!user) return <Navigate to="/" replace />;

  switch (user.role) {
    case "admin":
      return <Navigate to="/dashboard/organizations" replace />;
    case "organization":
      return <Navigate to="/dashboard/teams" replace />;
    case "trainer":
      return <Navigate to="/dashboard/teams" replace />;
    case "athlete":
      return <Navigate to="/dashboard/app/testings" replace />;
  }
};
