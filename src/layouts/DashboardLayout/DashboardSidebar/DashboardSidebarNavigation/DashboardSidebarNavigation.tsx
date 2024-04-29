/** @format */

import React from "react";
import { AuthRoleGuard } from "@/features/auth";
import { DashboardSidebarOrganizationsMenu } from "./DashboardSidebarOrganizationsMenu";
import { DashboardSidebarTeamsMenu } from "./DashboardSidebarTeamsMenu";
import { DashboardSidebarTrainersMenu } from "./DashboardSidebarTrainersMenu";
import { DashboardSidebarAthletesMenu } from "./DashboardSidebarAthletesMenu";
import { DashboardSidebarHomeMenu } from "./DashboardSidebarHomeMenu";
import * as sc from "./DashboardSidebarNavigation.styled";

export const DashboardSidebarNavigation: React.FC = () => {
  return (
    <sc.Component>
      <sc.Menu.List>
        <AuthRoleGuard roles={["athlete"]}>
          <DashboardSidebarHomeMenu />
        </AuthRoleGuard>
        <AuthRoleGuard roles={["admin"]}>
          <DashboardSidebarOrganizationsMenu />
        </AuthRoleGuard>
        <AuthRoleGuard roles={["trainer"]}>
          <DashboardSidebarTeamsMenu />
        </AuthRoleGuard>
        <AuthRoleGuard roles={["admin", "organization"]}>
          <DashboardSidebarTeamsMenu />
          <DashboardSidebarTrainersMenu />
        </AuthRoleGuard>
        <AuthRoleGuard roles={["admin", "organization", "trainer"]}>
          <DashboardSidebarAthletesMenu />
        </AuthRoleGuard>
      </sc.Menu.List>
    </sc.Component>
  );
};
