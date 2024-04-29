/** @format */

import React from "react";

// Textarea component's variants.
export type TextareaVariant = "default";

// Textarea component's shapes.
export type TextareaShape = "rounded" | "square" | "circular";

// Textarea component's props.
export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  variant?: TextareaVariant;
  shape?: TextareaShape;
  label?: string;
  asterisk?: boolean;
  invalid?: boolean;
  hideValidation?: boolean;
  containerRef?: React.Ref<HTMLDivElement>;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
}
