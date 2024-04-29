/** @format */

import React from "react";
import { SectionHelperProps } from "./types";
import * as sc from "./SectionHelper.styled";

const _SectionHelper = React.forwardRef<HTMLDivElement, SectionHelperProps>(
  (
    { variant = "informative", children, ...rest },
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <sc.Wrapper
        ref={ref}
        {...rest}
        data-component="section-helper"
        $variant={variant}>
        <sc.Content>{children}</sc.Content>
      </sc.Wrapper>
    );
  }
);

export const SectionHelper = React.memo(_SectionHelper);
SectionHelper.displayName = "@/library/core/SectionHelper";
