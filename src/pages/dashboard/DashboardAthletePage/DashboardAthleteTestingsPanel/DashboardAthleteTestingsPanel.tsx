/** @format */

import React from "react";
// import { t } from "i18next";
import { useAthleteViewContext } from "@/features/athletes";
import {
  TestingsListingProvider,
  TestingsListingTable,
  useTestingsVisualizationContext,
} from "@/features/testings";

const _DashboardAthleteTestingsPanel: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const { athlete } = useAthleteViewContext();
  const visualization = useTestingsVisualizationContext();

  // Renders page only, when athlete is defined and has necessary values.
  if (!athlete) return null;
  return (
    <TestingsListingProvider athleteId={athlete._id}>
      <TestingsListingTable
        // headline={t("List of Testings")}
        bodySize={6}
        searchable={false}
        selectable={true}
        selectLimit={3}
        initialSelected={visualization.selectedTestings}
        selected={visualization.selectedTestings}
        setSelected={visualization.setSelectedTestings}
      />
    </TestingsListingProvider>
  );
};

export const DashboardAthleteTestingsPanel = React.memo(
  _DashboardAthleteTestingsPanel
);
DashboardAthleteTestingsPanel.displayName =
  "@/pages/DashboardAthleteTestingsPanel";
