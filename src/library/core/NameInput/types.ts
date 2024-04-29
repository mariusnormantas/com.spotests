/** @format */

import { InputProps } from "../Input";

// Name input component's props.
export interface NameInputProps extends Omit<InputProps, "variant"> {
  setValue: (value: string) => void;
}
