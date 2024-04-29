/** @format */

import React from "react";
import { FormContext } from "../FormProvider";
import { FormInitProps } from "./types";
import * as sc from "./FormInit.styled";

const _FormInit = React.forwardRef<HTMLFormElement, FormInitProps>(
  ({ form, children, onSubmit, ...rest }, ref: React.Ref<HTMLFormElement>) => {
    return (
      <FormContext.Provider value={form}>
        <sc.Component
          ref={ref}
          id={form.id}
          onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
            onSubmit?.(e);
            await form.handleSubmit(e);
          }}
          data-component="form"
          {...rest}>
          {children}
        </sc.Component>
      </FormContext.Provider>
    );
  }
);

export const FormInit = React.memo(_FormInit);
FormInit.displayName = "@/library/form/FormInit";
