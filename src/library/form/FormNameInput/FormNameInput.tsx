/** @format */

import React from "react";
import { NameInput } from "@/library/core";
import { FormInputProps } from "../FormInput";
import { useFormContext } from "../use-form-context";
import { useFormKey } from "../use-form-key";
import { FormValue } from "../types";

const _FormNameInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ name, disabled, invalid, ...rest }, ref: React.Ref<HTMLInputElement>) => {
    // Initializes component's states, hooks and etc.
    const { value, error, isTouched } = useFormKey({ name });
    const { isSubmitting, handleChange, handleBlur } = useFormContext();

    return (
      <NameInput
        ref={ref}
        name={name}
        disabled={disabled || isSubmitting}
        invalid={invalid || (!!error && isTouched)}
        value={value.toString()}
        setValue={(value: FormValue) => handleChange(name, value)}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(name, e.target.value)
        }
        onBlur={() => handleBlur(name)}
        {...rest}
      />
    );
  }
);

export const FormNameInput = React.memo(_FormNameInput);
FormNameInput.displayName = "@/library/form/FormNameInput";
