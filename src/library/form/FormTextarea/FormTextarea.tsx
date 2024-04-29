/** @format */

import React from "react";
import { Textarea } from "@/library/core";
import { useFormContext } from "../use-form-context";
import { useFormKey } from "../use-form-key";
import { FormTextareaProps } from "./types";

const _FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ name, disabled, ...rest }, ref: React.Ref<HTMLTextAreaElement>) => {
    // Initializes component's states, hooks and etc.
    const { value } = useFormKey({ name });
    const { isSubmitting, handleChange, handleBlur } = useFormContext();

    return (
      <Textarea
        ref={ref}
        name={name}
        disabled={disabled || isSubmitting}
        value={value.toString()}
        onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          handleChange(name, e.target.value)
        }
        onBlur={() => handleBlur(name)}
        {...rest}
      />
    );
  }
);

export const FormTextarea = React.memo(_FormTextarea);
FormTextarea.displayName = "@/library/form/FormTextarea";
