/** @format */

import React from "react";
import { IconProps } from "./types";
import * as sc from "./Icon.styled";

const _Icon = React.forwardRef<HTMLDivElement, IconProps>(
  ({ render: Render, size = 1, ...rest }, ref: React.Ref<HTMLDivElement>) => {
    return (
      <sc.Component ref={ref} {...rest} data-component="icon" $size={size}>
        <Render />
      </sc.Component>
    );
  }
);

export const Icon = React.memo(_Icon);
Icon.displayName = "@/library/core/Icon";
