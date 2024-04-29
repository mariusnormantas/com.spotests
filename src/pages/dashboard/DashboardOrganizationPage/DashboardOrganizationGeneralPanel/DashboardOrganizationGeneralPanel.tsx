/** @format */

import React from "react";
import { t } from "i18next";
import {
  OrganizationGeneralDataWidget,
  OrganizationLimitsListingTable,
  useOrganizationViewContext,
} from "@/features/organizations";

const _DashboardOrganizationGeneralPanel: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const { organization } = useOrganizationViewContext();

  // Renders page only, when organization is defined and has necessary values.
  if (!organization) return null;
  return (
    <React.Fragment>
      <OrganizationGeneralDataWidget organization={organization} />
      <OrganizationLimitsListingTable
        organization={organization}
        headline={t("Statistics of limits")}
        searchable={false}
      />
    </React.Fragment>
  );
};

export const DashboardOrganizationGeneralPanel = React.memo(
  _DashboardOrganizationGeneralPanel
);
DashboardOrganizationGeneralPanel.displayName =
  "@/pages/DashboardOrganizationGeneralPanel";
