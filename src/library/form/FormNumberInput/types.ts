/** @format */

import { NumberInputProps } from "@/library/core";

// Form number input component's props.
export interface FormNumberInputProps
  extends Omit<NumberInputProps, "variant" | "name" | "value" | "setValue"> {
  name: string;
}
