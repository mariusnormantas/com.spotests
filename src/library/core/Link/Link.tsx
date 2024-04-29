/** @format */

import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { LinkProps } from "./types";
import * as sc from "./Link.styled";

const _Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { variant = "default", disabled, to, children, ...rest },
    ref: React.Ref<HTMLAnchorElement>
  ) => {
    return (
      <sc.Component
        as={RouterLink}
        ref={ref}
        tabIndex={!disabled ? 0 : undefined}
        to={to}
        aria-disabled={disabled}
        {...rest}
        data-component="link"
        $variant={variant}>
        {children}
      </sc.Component>
    );
  }
);

export const Link = React.memo(_Link);
Link.displayName = "@/library/core/Link";
