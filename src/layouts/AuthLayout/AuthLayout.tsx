/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import { t } from "i18next";
import { Logo } from "@/library/core";
import { LanguageSwitcher } from "@/features/internationalization";
import { AuthLayoutProps } from "./types";
import * as sc from "./AuthLayout.styled";

const _AuthLayout: React.FC<AuthLayoutProps> = ({ title }) => {
  return (
    <React.Fragment>
      <sc.GlobalStyles />
      <sc.Component data-component="layout">
        <sc.Container>
          <sc.Card>
            {title && <Logo title={t(title)} description={true} />}
            <Outlet />
          </sc.Card>
          <sc.Footer>
            <LanguageSwitcher />
          </sc.Footer>
        </sc.Container>
      </sc.Component>
    </React.Fragment>
  );
};

export const AuthLayout = React.memo(_AuthLayout);
AuthLayout.displayName = "@/layouts/AuthLayout";
