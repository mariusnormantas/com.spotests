/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import * as sc from "./PublicLayout.styled";

const _PublicLayout: React.FC = () => {
  return (
    <sc.Component data-component="layout">
      <Outlet />
    </sc.Component>
  );
};

export const PublicLayout = React.memo(_PublicLayout);
PublicLayout.displayName = "@/layouts/PublicLayout";
