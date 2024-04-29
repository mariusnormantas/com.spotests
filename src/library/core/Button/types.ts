/** @format */

import React from "react";
import { ButtonGroupProps } from "./ButtonGroup";

// Button's variants.
export type ButtonVariant =
  | "default" // Default bordered with white background.
  | "neutral" // Neutral colored button.
  | "primary" // Brand colored button.
  | "secondary" // Secondary colored button.
  | "subtle" // Background appears only when hovered.
  | "transparent" // Without background, only colored text.
  | "danger"; // Dangerous button.

// Button's sizes.
export type ButtonSize = "extra-small" | "small" | "medium" | "large";

// Button's shape.
export type ButtonShape = "rounded" | "circular" | "square";

// Button component's props.
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  iconStart?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconEnd?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  loading?: boolean;
  fullWidth?: boolean;
  counter?: boolean;
  reduce?: boolean;
  children?: React.ReactNode;
}

// Button's component includes relative components.
export type ButtonComponent = React.MemoExoticComponent<
  React.ForwardRefExoticComponent<
    ButtonProps & React.RefAttributes<HTMLButtonElement>
  >
> & {
  Group: React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      ButtonGroupProps & React.RefAttributes<HTMLDivElement>
    >
  >;
};
