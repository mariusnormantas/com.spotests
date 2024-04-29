/** @format */

import React from "react";

// Menu item's variant.
export type MenuItemVariant = "default" | "primary" | "danger";

// Menu item component's props.
export interface MenuItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: MenuItemVariant;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
