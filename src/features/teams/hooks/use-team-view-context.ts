/** @format */

import React from "react";
import { TeamViewContext, TeamViewProviderReturn } from "../contexts";

export const useTeamViewContext = (): TeamViewProviderReturn => {
  const context = React.useContext<TeamViewProviderReturn>(TeamViewContext);
  if (!context) {
    throw new Error(
      "useTeamViewContext was called outside of TeamViewProvider context."
    );
  }
  return context;
};
