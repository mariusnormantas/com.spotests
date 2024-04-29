/** @format */

import React from "react";

// Badge component's variants.
export type BadgeVariant =
  | "primary"
  | "secondary"
  | "neutral"
  | "danger"
  | "success"
  | "informative"
  | "warning";

// Badge component's shapes.
export type BadgeShape = "rounded" | "square" | "circular";

// Badge component's sizes.
export type BadgeSize = "small" | "medium" | "large";

// Badge component's props.
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
  shape?: BadgeShape;
  size?: BadgeSize;
  counter?: boolean;
  iconStart?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconEnd?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
