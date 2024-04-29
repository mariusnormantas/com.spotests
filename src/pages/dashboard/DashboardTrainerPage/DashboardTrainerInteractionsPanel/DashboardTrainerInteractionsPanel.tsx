/** @format */

import React from "react";
import {
  TrainerInteractionsListingProvider,
  useTrainerViewContext,
} from "@/features/trainers";
import { TrainerInteractionsListingTable } from "@/features/trainers";

const _DashboardTrainerInteractionsPanel: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const { trainer } = useTrainerViewContext();

  // Renders page only, when trainer is defined and has necessary values.
  if (!trainer) return null;
  return (
    <TrainerInteractionsListingProvider trainerId={trainer._id}>
      <TrainerInteractionsListingTable searchable={false} bodySize={6} />
    </TrainerInteractionsListingProvider>
  );
};

export const DashboardTrainerInteractionsPanel = React.memo(
  _DashboardTrainerInteractionsPanel
);
DashboardTrainerInteractionsPanel.displayName =
  "@/pages/DashboardTrainerInteractionsPanel";
