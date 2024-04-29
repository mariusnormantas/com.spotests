/** @format */

import React from "react";
import {
  AthleteInteractionsListingProvider,
  AthleteInteractionsListingTable,
  useAthleteViewContext,
} from "@/features/athletes";

const _DashboardAthleteInteractionsPanel: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const { athlete } = useAthleteViewContext();

  // Renders page only, when athlete is defined and has necessary values.
  if (!athlete) return null;
  return (
    <AthleteInteractionsListingProvider athleteId={athlete._id}>
      <AthleteInteractionsListingTable searchable={false} bodySize={6} />
    </AthleteInteractionsListingProvider>
  );
};

export const DashboardAthleteInteractionsPanel = React.memo(
  _DashboardAthleteInteractionsPanel
);
DashboardAthleteInteractionsPanel.displayName =
  "@/pages/DashboardAthleteInteractionsPanel";
