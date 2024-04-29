/** @format */

import React from "react";
import { Checkbox } from "@/library/core";
import { useFormContext } from "../use-form-context";
import { useFormKey } from "../use-form-key";
import { FormCheckboxProps } from "./types";

const _FormCheckbox = React.forwardRef<HTMLInputElement, FormCheckboxProps>(
  ({ name, disabled, ...rest }, ref: React.Ref<HTMLInputElement>) => {
    // Initializes component's states, hooks and etc.
    const { value } = useFormKey({ name });
    const { isSubmitting, handleChange, handleBlur } = useFormContext();

    return (
      <Checkbox
        ref={ref}
        name={name}
        disabled={disabled || isSubmitting}
        checked={Boolean(value)}
        onChange={(event) => {
          handleChange(name, Boolean(event.target.checked));
          handleBlur(name);
        }}
        {...rest}
      />
    );
  }
);

export const FormCheckbox = React.memo(_FormCheckbox);
FormCheckbox.displayName = "@/library/form/FormCheckbox";
