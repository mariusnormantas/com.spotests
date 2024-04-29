/** @format */

import { InputProps } from "../Input";

// Number input component's props.
export interface NumberInputProps
  extends Omit<InputProps, "variant" | "onInput"> {
  setValue: (value: string) => void;
  min?: number;
  max?: number;
  decimals?: number | boolean;
  step?: number;
  hideControls?: boolean;
}
