/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import { PiArticleDuotone, PiClockDuotone } from "react-icons/pi";
import { t } from "i18next";
import { DashboardPage } from "@/layouts";
import { Tabs } from "@/library/core";
import { useOrganizationViewContext } from "@/features/organizations";
import { DashboardOrganizationHeader } from "./DashboardOrganizationHeader";

const _DashboardOrganizationPage: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const { organization } = useOrganizationViewContext();

  // Renders page only, when organization is defined and has necessary values.
  if (!organization) return null;
  return (
    <DashboardPage
      title={organization.name}
      headerSection={
        <DashboardOrganizationHeader organization={organization} />
      }>
      <Tabs.Init>
        <Tabs.List>
          <Tabs.Item
            icon={PiArticleDuotone}
            path="/dashboard/organizations/:organizationId"
            params={{ organizationId: organization._id }}>
            {t("Information")}
          </Tabs.Item>
          <Tabs.Item
            icon={PiClockDuotone}
            path="/dashboard/organizations/:organizationId/interactions"
            params={{ organizationId: organization._id }}>
            {t("Interactions")}
          </Tabs.Item>
        </Tabs.List>
        <Tabs.Panel withRouter>
          <Outlet />
        </Tabs.Panel>
      </Tabs.Init>
    </DashboardPage>
  );
};

export const DashboardOrganizationPage = React.memo(_DashboardOrganizationPage);
DashboardOrganizationPage.displayName = "@/pages/DashboardOrganizationPage";
