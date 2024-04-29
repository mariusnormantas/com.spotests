/** @format */

import React from "react";
import { t } from "i18next";
import { DashboardPage } from "@/layouts";
import { OrganizationsListingTable } from "@/features/organizations";
import { DashboardOrganizationsHeader } from "./DashboardOrganizationsHeader";

const _DashboardOrganizationsPage: React.FC = () => {
  return (
    <DashboardPage
      title={t("Organizations")}
      headerSection={<DashboardOrganizationsHeader />}>
      <OrganizationsListingTable searchable={false} bodySize={8} />
    </DashboardPage>
  );
};

export const DashboardOrganizationsPage = React.memo(
  _DashboardOrganizationsPage
);
DashboardOrganizationsPage.displayName = "@/pages/DashboardOrganizationsPage";
