/** @format */

import React from "react";
import { t } from "i18next";
import { Page } from "@/library/core";
import { ForgotPasswordForm } from "@/features/auth";

const _ForgotPasswordPage: React.FC = () => {
  return (
    <Page title={t("Reset your password")}>
      <ForgotPasswordForm />
    </Page>
  );
};

export const ForgotPasswordPage = React.memo(_ForgotPasswordPage);
ForgotPasswordPage.displayName = "@/pages/ForgotPasswordPage";
