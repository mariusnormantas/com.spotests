/** @format */

import React from "react";
import { PasswordInput } from "@/library/core";
import { useFormKey } from "../use-form-key";
import { useFormContext } from "../use-form-context";
import { FormPasswordInputProps } from "./types";

const _FormPasswordInput = React.forwardRef<
  HTMLInputElement,
  FormPasswordInputProps
>(({ name, disabled, invalid, ...rest }, ref: React.Ref<HTMLInputElement>) => {
  // Initializes component's states, hooks and etc.
  const { value, error, isTouched } = useFormKey({ name });
  const { isSubmitting, handleChange, handleBlur } = useFormContext();

  return (
    <PasswordInput
      ref={ref}
      name={name}
      disabled={disabled || isSubmitting}
      invalid={invalid || (!!error && isTouched)}
      value={value.toString()}
      onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
        handleChange(name, e.target.value)
      }
      onBlur={() => handleBlur(name)}
      {...rest}
    />
  );
});

export const FormPasswordInput = React.memo(_FormPasswordInput);
FormPasswordInput.displayName = "@/library/form/FormPasswordInput";
