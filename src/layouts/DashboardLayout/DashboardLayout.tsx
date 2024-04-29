/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import { PiCircleNotchBold } from "react-icons/pi";
import { t } from "i18next";
import { useDashboardContext } from "@/features/dashboard";
import { DashboardSidebar } from "./DashboardSidebar";
import * as sc from "./DashboardLayout.styled";
import { LanguageSwitcher } from "@/features/internationalization";

const _DashboardLayout: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const dashboard = useDashboardContext();

  // Memoized loading screen node.
  const loadingNode = React.useMemo(() => {
    if (!dashboard.isLoading) return null;
    return (
      <sc.Loading>
        <sc.Label>{t("Please wait")}</sc.Label>
        <sc.Indicator as={PiCircleNotchBold} />
      </sc.Loading>
    );
  }, [dashboard.isLoading]);

  return (
    <React.Fragment>
      <sc.GlobalStyles />
      <sc.Component data-component="layout">
        <DashboardSidebar />
        <sc.Container>
          {loadingNode}
          <Outlet />
          <sc.Footer>
            <LanguageSwitcher />
          </sc.Footer>
        </sc.Container>
      </sc.Component>
    </React.Fragment>
  );
};

export const DashboardLayout = React.memo(_DashboardLayout);
DashboardLayout.displayName = "@/layouts/DashboardLayout";
