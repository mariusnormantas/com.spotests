/** @format */

import React from "react";
import { t } from "i18next";
import { DashboardPage } from "@/layouts";
import { useOrganizationViewContext } from "@/features/organizations";
import { useTeamViewContext } from "@/features/teams";
import { AthletesListingTable } from "@/features/athletes";
import { DashboardAthletesHeader } from "./DashboardAthletesHeader";

const _DashboardAthletesPage: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const { organization } = useOrganizationViewContext();
  const { team } = useTeamViewContext();

  return (
    <DashboardPage
      title={t("Athletes")}
      tagline={
        organization && team
          ? `${organization.name} - ${team.name}`
          : team?.name ?? organization?.name
      }
      headerSection={<DashboardAthletesHeader />}>
      <AthletesListingTable
        headline={
          team
            ? t("Athletes of team")
            : organization && t("Athletes of organization")
        }
        searchable={false}
        bodySize={8}
      />
    </DashboardPage>
  );
};

export const DashboardAthletesPage = React.memo(_DashboardAthletesPage);
DashboardAthletesPage.displayName = "@/pages/DashboardAthletesPage";
