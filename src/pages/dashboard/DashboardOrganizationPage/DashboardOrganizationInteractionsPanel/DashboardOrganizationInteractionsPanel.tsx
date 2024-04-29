/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import {
  OrganizationInteractionsListingTable,
  OrganizationInteractionsListingProvider,
} from "@/features/organizations";

const _DashboardOrganizationInteractionsPanel: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const { organizationId } = useParams();

  // Renders page only, when organizationId is defined and has necessary values.
  if (!organizationId) return null;
  return (
    <OrganizationInteractionsListingProvider organizationId={organizationId}>
      <OrganizationInteractionsListingTable searchable={false} bodySize={6} />
    </OrganizationInteractionsListingProvider>
  );
};

export const DashboardOrganizationInteractionsPanel = React.memo(
  _DashboardOrganizationInteractionsPanel
);
DashboardOrganizationInteractionsPanel.displayName =
  "@/pages/DashboardOrganizationInteractionsPanel";
