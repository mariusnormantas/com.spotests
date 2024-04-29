/** @format */

import React from "react";
import { FormContext } from "./FormProvider";
import { UseFormReturn } from "./types";

export const useFormContext = (): UseFormReturn => {
  // Initializes component's states, hooks and etc.
  const context = React.useContext<UseFormReturn>(FormContext);

  // Checks, if context requested inside of it's provider.
  if (!context) {
    throw new Error(
      "useFormContext was called outside of FormProvider context."
    );
  }
  return context;
};
