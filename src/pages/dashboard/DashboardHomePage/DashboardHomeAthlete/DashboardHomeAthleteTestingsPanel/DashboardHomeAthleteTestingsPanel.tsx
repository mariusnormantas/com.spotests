/** @format */

import React from "react";
import {
  TestingsListingProvider,
  TestingsListingTable,
  useTestingsVisualizationContext,
} from "@/features/testings";

const _DashboardHomeAthleteTestingsPanel: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const visualization = useTestingsVisualizationContext();

  return (
    <TestingsListingProvider>
      <TestingsListingTable
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

export const DashboardHomeAthleteTestingsPanel = React.memo(
  _DashboardHomeAthleteTestingsPanel
);
DashboardHomeAthleteTestingsPanel.displayName =
  "@/pages/DashboardHomeAthleteTestingsPanel";
