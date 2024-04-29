/** @format */

import React from "react";
import { CardInitProps } from "./types";
import * as sc from "./CardInit.styled";

const _CardInit = React.forwardRef<HTMLDivElement, CardInitProps>(
  (
    { variant = "default", children, ...rest },
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <sc.Component
        ref={ref}
        {...rest}
        data-component="card"
        $variant={variant}>
        {children}
      </sc.Component>
    );
  }
);

export const CardInit = React.memo(_CardInit);
CardInit.displayName = "@/library/core/CardInit";
