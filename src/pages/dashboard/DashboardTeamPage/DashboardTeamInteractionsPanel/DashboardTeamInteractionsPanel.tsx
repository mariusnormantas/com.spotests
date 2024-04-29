/** @format */

import React from "react";
import {
  TeamInteractionsListingTable,
  TeamInteractionsListingProvider,
  useTeamViewContext,
} from "@/features/teams";

const _DashboardTeamInteractionsPanel: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const { team } = useTeamViewContext();

  // Renders page only, when team is defined and has necessary values.
  if (!team) return null;
  return (
    <TeamInteractionsListingProvider teamId={team._id}>
      <TeamInteractionsListingTable searchable={false} bodySize={6} />
    </TeamInteractionsListingProvider>
  );
};

export const DashboardTeamInteractionsPanel = React.memo(
  _DashboardTeamInteractionsPanel
);
DashboardTeamInteractionsPanel.displayName =
  "@/pages/DashboardTeamInteractionsPanel";
