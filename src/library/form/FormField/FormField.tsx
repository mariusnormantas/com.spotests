/** @format */

import React from "react";
import { Field } from "@/library/core";
import { useFormKey } from "../use-form-key";
import { FormFieldProps } from "./types";

const _FormField: React.FC<FormFieldProps> = ({
  hideValidation,
  children,
  ...rest
}) => {
  // Initializes component's states, hooks and etc.
  const { name } = children.props;
  const { isTouched, error } = useFormKey({ name });

  return (
    <Field
      {...rest}
      validation={error}
      hideValidation={hideValidation || !isTouched}>
      {children}
    </Field>
  );
};

export const FormField = React.memo(_FormField);
FormField.displayName = "@/library/form/FormField";
