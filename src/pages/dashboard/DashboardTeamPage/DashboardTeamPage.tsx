/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import { PiArticleDuotone, PiClockDuotone } from "react-icons/pi";
import { t } from "i18next";
import { DashboardPage } from "@/layouts";
import { Tabs } from "@/library/core";
import { AuthRoleGuard, useAuthContext } from "@/features/auth";
import { useOrganizationViewContext } from "@/features/organizations";
import { useTeamViewContext } from "@/features/teams";
import { DashboardTeamHeader } from "./DashboardTeamHeader";
import { useDashboardLinks } from "@/features/dashboard";

const _DashboardTeamPage: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const links = useDashboardLinks();
  const { user } = useAuthContext();
  const { organization } = useOrganizationViewContext();
  const { team } = useTeamViewContext();

  // Renders page only, when user is defined and has necessary values.
  if (!user || !team) return null;
  return (
    <DashboardPage
      title={team.name}
      tagline={organization?.name}
      headerSection={
        <AuthRoleGuard roles={["admin", "organization"]}>
          <DashboardTeamHeader team={team} />
        </AuthRoleGuard>
      }>
      <Tabs.Init>
        <Tabs.List>
          <Tabs.Item
            icon={PiArticleDuotone}
            path={`${links.teams}/:teamId`}
            params={{ teamId: team._id }}>
            {t("Information")}
          </Tabs.Item>
          <Tabs.Item
            icon={PiClockDuotone}
            path={`${links.teams}/:teamId/interactions`}
            params={{ teamId: team._id }}>
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

export const DashboardTeamPage = React.memo(_DashboardTeamPage);
DashboardTeamPage.displayName = "@/pages/DashboardTeamPage";
