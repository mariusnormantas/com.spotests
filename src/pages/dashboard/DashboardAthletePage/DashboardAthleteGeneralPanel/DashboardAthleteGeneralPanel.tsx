/** @format */

import React from "react";
import {
  AthleteGeneralDataWidget,
  useAthleteViewContext,
} from "@/features/athletes";

const _DashboardAthleteGeneralPanel: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const { athlete } = useAthleteViewContext();

  // Renders page only, when athlete is defined and has necessary values.
  if (!athlete) return null;
  return <AthleteGeneralDataWidget athlete={athlete} />;
};

export const DashboardAthleteGeneralPanel = React.memo(
  _DashboardAthleteGeneralPanel
);
DashboardAthleteGeneralPanel.displayName =
  "@/pages/DashboardAthleteGeneralPanel";
