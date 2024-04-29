/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import { PiClipboardTextDuotone, PiPolygonDuotone } from "react-icons/pi";
import { t } from "i18next";
import { useAuthContext } from "@/features/auth";
import { Tabs } from "@/library/core";

const _DashboardHomeAthlete: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const { user } = useAuthContext();

  // Renders page only, when user is defined and has necessary values.
  if (!user) return null;
  return (
    <Tabs.Init>
      <Tabs.List>
        <Tabs.Item icon={PiClipboardTextDuotone} path="/dashboard/app/testings">
          {t("Testings")}
        </Tabs.Item>
        <Tabs.Item icon={PiPolygonDuotone} path="/dashboard/app/visualization">
          {t("Visualization")}
        </Tabs.Item>
      </Tabs.List>
      <Tabs.Panel withRouter>
        <Outlet />
      </Tabs.Panel>
    </Tabs.Init>
  );
};

export const DashboardHomeAthlete = React.memo(_DashboardHomeAthlete);
DashboardHomeAthlete.displayName = "@/pages/DashboardHomeAthlete";
