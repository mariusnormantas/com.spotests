/** @format */

import React from "react";
import { NumberInput } from "@/library/core";
import { useFormContext } from "../use-form-context";
import { useFormKey } from "../use-form-key";
import { FormValue } from "../types";
import { FormNumberInputProps } from "./types";

const _FormNumberInput = React.forwardRef<
  HTMLInputElement,
  FormNumberInputProps
>(({ name, disabled, invalid, ...rest }, ref: React.Ref<HTMLInputElement>) => {
  // Initializes component's states, hooks and etc.
  const { value, error, isTouched } = useFormKey({ name });
  const { isSubmitting, handleChange, handleBlur } = useFormContext();

  return (
    <NumberInput
      ref={ref}
      name={name}
      disabled={disabled || isSubmitting}
      invalid={invalid || (!!error && isTouched)}
      value={value.toString()}
      setValue={(value: FormValue) => handleChange(name, value)}
      onBlur={() => handleBlur(name)}
      {...rest}
    />
  );
});

export const FormNumberInput = React.memo(_FormNumberInput);
FormNumberInput.displayName = "@/library/form/FormNumberInput";
