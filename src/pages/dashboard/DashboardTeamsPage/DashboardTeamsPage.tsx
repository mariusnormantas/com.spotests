/** @format */

import React from "react";
import { t } from "i18next";
import { DashboardPage } from "@/layouts";
import { useOrganizationViewContext } from "@/features/organizations";
import { TeamsListingTable } from "@/features/teams";
import { DashboardTeamsHeader } from "./DashboardTeamsHeader";

const _DashboardTeamsPage: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const { organization } = useOrganizationViewContext();

  return (
    <DashboardPage
      title={t("Teams")}
      tagline={organization && organization.name}
      headerSection={<DashboardTeamsHeader />}>
      <TeamsListingTable
        headline={organization && t("Teams of organization")}
        searchable={false}
        bodySize={8}
      />
    </DashboardPage>
  );
};

export const DashboardTeamsPage = React.memo(_DashboardTeamsPage);
DashboardTeamsPage.displayName = "@/pages/DashboardTeamsPage";
