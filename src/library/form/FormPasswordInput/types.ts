/** @format */

import { FormInputProps } from "../FormInput";

// Form password input component's props.
export type FormPasswordInputProps = Omit<FormInputProps, "type" | "value">;
