/** @format */

import React from "react";
import { t } from "i18next";
import { format } from "date-fns";
import { DashboardPage } from "@/layouts";
import { AuthRoleGuard, useAuthContext } from "@/features/auth";
import { DashboardHomeAthlete } from "./DashboardHomeAthlete";

const _DashboardHomePage: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const { user } = useAuthContext();

  // Memoized currrent date's string.
  const currentDate = React.useMemo(() => {
    const date = new Date();
    return `${format(date, "yyyy")} m. ${format(date, "MMMM dd")} d.`;
  }, []);

  // Renders page only, when user is defined and has necessary values.
  if (!user) return null;
  return (
    <DashboardPage
      title={t("Welcome back, {{name}}", { name: user.name })}
      tagline={currentDate}>
      <AuthRoleGuard roles={["athlete"]}>
        <DashboardHomeAthlete />
      </AuthRoleGuard>
    </DashboardPage>
  );
};

export const DashboardHomePage = React.memo(_DashboardHomePage);
DashboardHomePage.displayName = "@/pages/DashboardHomePage";
