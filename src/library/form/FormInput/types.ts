/** @format */

import { InputProps } from "@/library/core";

// Form input component's props.
export interface FormInputProps extends Omit<InputProps, "name" | "value"> {
  name: string;
}
