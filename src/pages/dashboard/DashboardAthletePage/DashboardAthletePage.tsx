/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import {
  PiArticleDuotone,
  PiClipboardTextDuotone,
  PiClockDuotone,
  PiPolygonDuotone,
} from "react-icons/pi";
import { t } from "i18next";
import { DashboardPage } from "@/layouts";
import { Tabs } from "@/library/core";
import { useDashboardLinks } from "@/features/dashboard";
import { useOrganizationViewContext } from "@/features/organizations";
import { useTeamViewContext } from "@/features/teams";
import { useAthleteViewContext } from "@/features/athletes";
import { DashboardAthleteHeader } from "./DashboardAthleteHeader";

const _DashboardAthletePage: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const links = useDashboardLinks();
  const { organization } = useOrganizationViewContext();
  const { team } = useTeamViewContext();
  const { athlete } = useAthleteViewContext();

  // Renders page only, when user is defined and has necessary values.
  if (!athlete) return null;
  return (
    <DashboardPage
      title={athlete.name}
      tagline={
        organization && team
          ? `${organization.name} - ${team.name}`
          : team?.name ?? organization?.name
      }
      headerSection={<DashboardAthleteHeader athlete={athlete} />}>
      <Tabs.Init>
        <Tabs.List>
          <Tabs.Item
            icon={PiArticleDuotone}
            path={`${links.athletes}/:athleteId`}
            params={{ athleteId: athlete._id }}>
            {t("Information")}
          </Tabs.Item>
          <Tabs.Item
            icon={PiClipboardTextDuotone}
            path={`${links.athletes}/:athleteId/testings`}
            params={{ athleteId: athlete._id }}>
            {t("Testings")}
          </Tabs.Item>
          <Tabs.Item
            icon={PiPolygonDuotone}
            path={`${links.athletes}/:athleteId/visualization`}
            params={{ athleteId: athlete._id }}>
            {t("Visualization")}
          </Tabs.Item>
          <Tabs.Item
            icon={PiClockDuotone}
            path={`${links.athletes}/:athleteId/interactions`}
            params={{ athleteId: athlete._id }}>
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

export const DashboardAthletePage = React.memo(_DashboardAthletePage);
DashboardAthletePage.displayName = "@/pages/DashboardAthletePage";
