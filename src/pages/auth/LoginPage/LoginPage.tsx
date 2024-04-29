/** @format */

import React from "react";
import { t } from "i18next";
import { Page } from "@/library/core";
import { LoginForm } from "@/features/auth";

const _LoginPage: React.FC = () => {
  return (
    <Page title={t("Login to your account")}>
      <LoginForm />
    </Page>
  );
};

export const LoginPage = React.memo(_LoginPage);
LoginPage.displayName = "@/pages/LoginPage";
