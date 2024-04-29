/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HiOutlineLockClosed,
  HiOutlineRocketLaunch,
  HiArrowTopRightOnSquare,
} from "react-icons/hi2";
import { t } from "i18next";
import { Button, Logo, Page } from "@/library/core";
import { useAuthContext, useLogoutMutation } from "@/features/auth";
import * as sc from "./WelcomePage.styled";

const _WelcomePage: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const navigate = useNavigate();
  const { accessToken, isLoggingOut } = useAuthContext();
  const logout = useLogoutMutation();

  return (
    <sc.Component as={Page} title={t("Strategies for effective training")}>
      <Logo description />
      {accessToken ? (
        <sc.Actions>
          <Button
            variant="primary"
            iconStart={HiOutlineRocketLaunch}
            disabled={isLoggingOut}
            onClick={() => navigate("/dashboard")}>
            {t("Dashboard")}
          </Button>
          <Button
            iconStart={HiArrowTopRightOnSquare}
            loading={isLoggingOut}
            onClick={() => logout.mutate(null)}>
            {t("Logout")}
          </Button>
        </sc.Actions>
      ) : (
        <Button
          variant="primary"
          iconStart={HiOutlineLockClosed}
          disabled={isLoggingOut}
          onClick={() => navigate("/login")}>
          {t("Login")}
        </Button>
      )}
    </sc.Component>
  );
};

export const WelcomePage = React.memo(_WelcomePage);
WelcomePage.displayName = "@/pages/WelcomePage";
