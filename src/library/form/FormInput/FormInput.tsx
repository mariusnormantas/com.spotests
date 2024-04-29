/** @format */

import React from "react";
import { Input } from "@/library/core";
import { useFormContext } from "../use-form-context";
import { useFormKey } from "../use-form-key";
import { FormInputProps } from "./types";

const _FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ name, disabled, invalid, ...rest }, ref: React.Ref<HTMLInputElement>) => {
    // Initializes component's states, hooks and etc.
    const { value, error, isTouched } = useFormKey({ name });
    const { isSubmitting, handleChange, handleBlur } = useFormContext();

    return (
      <Input
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
  }
);

export const FormInput = React.memo(_FormInput);
FormInput.displayName = "@/library/form/FormInput";
