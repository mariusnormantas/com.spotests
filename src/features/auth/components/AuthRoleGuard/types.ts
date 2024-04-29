/** @format */

import React from "react";

export type AuthRoleGuardProps = {
  roles: Array<"admin" | "organization" | "trainer" | "athlete">;
  children?: React.ReactNode;
};
