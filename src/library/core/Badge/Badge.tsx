/** @format */

import React from "react";
import { BadgeProps } from "./types";
import * as sc from "./Badge.styled";

const _Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      variant = "neutral",
      shape = "rounded",
      size = "medium",
      counter = false,
      iconStart,
      iconEnd,
      children,
      ...rest
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <sc.Component
        ref={ref}
        {...rest}
        data-component="badge"
        $variant={variant}
        $shape={shape}
        $size={size}
        $counter={counter}>
        <sc.Container>
          {iconStart && <sc.Icon as={iconStart} />}
          {children}
          {iconEnd && <sc.Icon as={iconEnd} />}
        </sc.Container>
      </sc.Component>
    );
  }
);

export const Badge = React.memo(_Badge);
Badge.displayName = "@/library/core/Badge";
