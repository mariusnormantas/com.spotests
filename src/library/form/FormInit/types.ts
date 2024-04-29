/** @format */

import React from "react";
import { UseFormReturn } from "../types";

// Form init component's props.
export interface FormInitProps
  extends React.FormHTMLAttributes<HTMLFormElement> {
  form: UseFormReturn;
  children: React.ReactNode;
}
