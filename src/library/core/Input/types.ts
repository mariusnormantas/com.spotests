/** @format */

import React from "react";

// Input component's colors.
export type InputVariant = "default" | "filled" | "outline";

// Input component's sizes.
export type InputSize = "small" | "medium" | "large";

// Input component's shapes.
export type InputShape = "rounded" | "square" | "circular";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: InputVariant;
  shape?: InputShape;
  size?: InputSize;
  label?: string;
  asterisk?: boolean;
  invalid?: boolean;
  hideValidation?: boolean;
  iconStart?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconEnd?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  sectionStart?: React.ReactNode;
  sectionEnd?: React.ReactNode;
  containerRef?: React.Ref<HTMLDivElement>;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
}
