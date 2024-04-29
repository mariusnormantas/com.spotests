/** @format */

import React from "react";
import { TrainerViewContext, TrainerViewProviderReturn } from "../contexts";

export const useTrainerViewContext = (): TrainerViewProviderReturn => {
  const context =
    React.useContext<TrainerViewProviderReturn>(TrainerViewContext);
  if (!context) {
    throw new Error(
      "useTrainerViewContext was called outside of TrainerViewProvider context."
    );
  }
  return context;
};
