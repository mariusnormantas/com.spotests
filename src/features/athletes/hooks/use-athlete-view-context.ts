/** @format */

import React from "react";
import { AthleteViewContext, AthleteViewProviderReturn } from "../contexts";

export const useAthleteViewContext = (): AthleteViewProviderReturn => {
  const context =
    React.useContext<AthleteViewProviderReturn>(AthleteViewContext);
  if (!context) {
    throw new Error(
      "useAthleteViewContext was called outside of AthleteViewProvider context."
    );
  }
  return context;
};
