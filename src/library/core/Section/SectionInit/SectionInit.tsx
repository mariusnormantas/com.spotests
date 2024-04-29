/** @format */

import React from "react";
import { SectionInitProps } from "./types";
import * as sc from "./SectionInit.styled";

const _SectionInit = React.forwardRef<HTMLElement, SectionInitProps>(
  ({ children, ...rest }, ref: React.Ref<HTMLElement>) => {
    return (
      <sc.Component ref={ref} {...rest} data-component="section">
        {children}
      </sc.Component>
    );
  }
);

export const SectionInit = React.memo(_SectionInit);
SectionInit.displayName = "@/library/core/SectionInit";
