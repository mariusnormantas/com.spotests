/** @format */

import React from "react";
import { t } from "i18next";
import { useAuthContext } from "@/features/auth";
import {
  TestingsListingProvider,
  TestingsListingTable,
  useTestingsVisualizationContext,
} from "@/features/testings";

export const DashboardTestingsPanel: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const authContext = useAuthContext();
  const visualizationContext = useTestingsVisualizationContext();

  // Renders page only, when athlete is defined and has necessary values.
  if (!authContext.user || !authContext.user._id) return null;
  return (
    <TestingsListingProvider athleteId={authContext.user._id}>
      <TestingsListingTable
        headline={t("List of Testings")}
        bodySize={6}
        searchable={false}
        selectable={true}
        selectLimit={3}
        initialSelected={visualizationContext.selectedTestings}
        selected={visualizationContext.selectedTestings}
        setSelected={visualizationContext.setSelectedTestings}
      />
    </TestingsListingProvider>
  );
};
