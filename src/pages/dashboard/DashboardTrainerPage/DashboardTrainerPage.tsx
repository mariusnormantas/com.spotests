/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import { PiArticleDuotone, PiClockDuotone } from "react-icons/pi";
import { t } from "i18next";
import { DashboardPage } from "@/layouts";
import { Tabs } from "@/library/core";
import { useDashboardLinks } from "@/features/dashboard";
import { useOrganizationViewContext } from "@/features/organizations";
import { useTrainerViewContext } from "@/features/trainers";
import { DashboardTrainerHeader } from "./DashboardTrainerHeader";
import { useTeamViewContext } from "@/features/teams";

const _DashboardTrainerPage: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const links = useDashboardLinks();
  const { organization } = useOrganizationViewContext();
  const { team } = useTeamViewContext();
  const { trainer } = useTrainerViewContext();

  // Renders page only, when user is defined and has necessary values.
  if (!trainer) return null;
  return (
    <DashboardPage
      title={trainer.name}
      tagline={
        organization && team
          ? `${organization.name} - ${team.name}`
          : team?.name ?? organization?.name
      }
      headerSection={<DashboardTrainerHeader trainer={trainer} />}>
      <Tabs.Init>
        <Tabs.List>
          <Tabs.Item
            icon={PiArticleDuotone}
            path={`${links.trainers}/:trainerId`}
            params={{ trainerId: trainer._id }}>
            {t("Information")}
          </Tabs.Item>
          <Tabs.Item
            icon={PiClockDuotone}
            path={`${links.trainers}/:trainerId/interactions`}
            params={{ trainerId: trainer._id }}>
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

export const DashboardTrainerPage = React.memo(_DashboardTrainerPage);
DashboardTrainerPage.displayName = "@/pages/DashboardTrainerPage";
