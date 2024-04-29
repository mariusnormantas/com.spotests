/** @format */

import React from "react";
import { t } from "i18next";
import { DashboardPage } from "@/layouts";
import { TrainersListingTable } from "@/features/trainers";
import { useOrganizationViewContext } from "@/features/organizations";
import { useTeamViewContext } from "@/features/teams";
import { DashboardTrainersHeader } from "./DashboardTrainersHeader";

const _DashboardTrainersPage: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const { organization } = useOrganizationViewContext();
  const { team } = useTeamViewContext();

  return (
    <DashboardPage
      title={t("Trainers")}
      tagline={
        organization && team
          ? `${organization.name} - ${team.name}`
          : team?.name ?? organization?.name
      }
      headerSection={<DashboardTrainersHeader />}>
      <TrainersListingTable
        headline={
          team
            ? t("Trainers of team")
            : organization && t("Trainers of organization")
        }
        searchable={false}
        bodySize={8}
      />
    </DashboardPage>
  );
};

export const DashboardTrainersPage = React.memo(_DashboardTrainersPage);
DashboardTrainersPage.displayName = "@/pages/DashboardTrainersPage";
