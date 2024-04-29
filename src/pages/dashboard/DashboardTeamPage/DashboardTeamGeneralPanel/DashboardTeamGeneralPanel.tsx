/** @format */

import React from "react";
import { t } from "i18next";
import { AuthRoleGuard } from "@/features/auth";
import {
  TeamGeneralDataWidget,
  TeamMembersStatisticsListingTable,
  useTeamViewContext,
} from "@/features/teams";

const _DashboardTeamGeneralPanel: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const { team } = useTeamViewContext();

  // Renders page only, when team is defined and has necessary values.
  if (!team) return null;
  return (
    <React.Fragment>
      <TeamGeneralDataWidget team={team} />
      <AuthRoleGuard roles={["admin", "organization"]}>
        <TeamMembersStatisticsListingTable
          team={team}
          headline={t("Statistics of members")}
          searchable={false}
        />
      </AuthRoleGuard>
    </React.Fragment>
  );
};

export const DashboardTeamGeneralPanel = React.memo(_DashboardTeamGeneralPanel);
DashboardTeamGeneralPanel.displayName = "@/pages/DashboardTeamGeneralPanel";
