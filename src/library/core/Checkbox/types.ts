/** @format */

import React from "react";

// Checkbox component's colors.
export type CheckboxVariant = "default";

// Checkbox component's sizes.
export type CheckboxSize = "small" | "medium" | "large";

export interface CheckboxProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "size" | "type" | "value"
  > {
  variant?: CheckboxVariant;
  size?: CheckboxSize;
  label?: string;
  asterisk?: boolean;
  containerRef?: React.Ref<HTMLDivElement>;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
}
