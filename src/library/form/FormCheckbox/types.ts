/** @format */

import { CheckboxProps } from "@/library/core";

// Form checkbox component's props.
export interface FormCheckboxProps
  extends Omit<CheckboxProps, "name" | "checked"> {
  name: string;
}
