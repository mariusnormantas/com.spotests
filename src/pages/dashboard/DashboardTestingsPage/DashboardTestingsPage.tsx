/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import { PiClipboardTextDuotone, PiPolygonDuotone } from "react-icons/pi";
import { t } from "i18next";
import { DashboardPage } from "@/layouts";
import { Tabs } from "@/library/core";
import { useAuthContext } from "@/features/auth";

export const DashboardTestingsPage: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const { user } = useAuthContext();

  // Renders page only, when user is defined and has necessary values.
  if (!user) return null;
  return (
    <DashboardPage title={t("Overview of Testings")}>
      <Tabs.Init>
        <Tabs.List>
          <Tabs.Item icon={PiClipboardTextDuotone} path="/dashboard/testings">
            {t("Testings")}
          </Tabs.Item>
          <Tabs.Item icon={PiPolygonDuotone} path="/dashboard/visualization">
            {t("Visualization")}
          </Tabs.Item>
        </Tabs.List>
        <Tabs.Panel withRouter>
          <Outlet />
        </Tabs.Panel>
      </Tabs.Init>
    </DashboardPage>
  );
};
