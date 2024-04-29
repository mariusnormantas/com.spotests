/** @format */

import React from "react";
import { UseFormReturn } from "./types";

export const FormContext = React.createContext<UseFormReturn>(
  {} as UseFormReturn
);
