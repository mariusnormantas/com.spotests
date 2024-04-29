/** @format */

import React from "react";
import { useAuthContext } from "../../hooks";
import { AuthRoleGuardProps } from "./types";

export const AuthRoleGuard: React.FC<AuthRoleGuardProps> = ({
  roles,
  children,
}) => {
  // Initializes component's states, hooks and etc.
  const { user } = useAuthContext();
  return user && roles.includes(user.role) ? children : null;
};
