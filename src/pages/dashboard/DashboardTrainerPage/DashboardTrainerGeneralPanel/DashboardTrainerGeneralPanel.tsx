/** @format */

import React from "react";
import {
  TrainerGeneralDataWidget,
  useTrainerViewContext,
} from "@/features/trainers";

const _DashboardTrainerGeneralPanel: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const { trainer } = useTrainerViewContext();

  // Renders page only, when trainer is defined and has necessary values.
  if (!trainer) return null;
  return <TrainerGeneralDataWidget trainer={trainer} />;
};

export const DashboardTrainerGeneralPanel = React.memo(
  _DashboardTrainerGeneralPanel
);
DashboardTrainerGeneralPanel.displayName =
  "@/pages/DashboardTrainerGeneralPanel";
