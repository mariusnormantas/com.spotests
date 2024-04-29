/** @format */

import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { t } from "i18next";
import { Page } from "@/library/core";
import { ResetPasswordForm } from "@/features/auth";

const _ResetPasswordPage: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const { token } = useParams();

  if (!token) return <Navigate to="/" replace />;
  return (
    <Page title={t("Reset your password")}>
      <ResetPasswordForm token={token} />
    </Page>
  );
};

export const ResetPasswordPage = React.memo(_ResetPasswordPage);
ResetPasswordPage.displayName = "@/pages/ResetPasswordPage";
