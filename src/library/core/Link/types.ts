/** @format */

import { LinkProps as RouterLinkProps } from "react-router-dom";

// Link component's variants.
export type LinkVariant = "default" | "primary" | "subtle";

// Link component's props.
export interface LinkProps extends RouterLinkProps {
  variant?: LinkVariant;
  disabled?: boolean;
}
