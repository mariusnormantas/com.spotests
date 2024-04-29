/** @format */

import React from "react";
import { SectionHeaderProps } from "./types";
import * as sc from "./SectionHeader.styled";

const _SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  (
    { title, description, children, ...rest },
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <sc.Component ref={ref} {...rest} data-component="section-header">
        <sc.Details>
          {title && <sc.Title>{title}</sc.Title>}
          {description && <sc.Description>{description}</sc.Description>}
        </sc.Details>
        {children && <sc.Toolbar>{children}</sc.Toolbar>}
      </sc.Component>
    );
  }
);

export const SectionHeader = React.memo(_SectionHeader);
SectionHeader.displayName = "@/library/core/SectionHeader";
