/** @format */

import React from "react";

// Card init component's variant.
export type CardInitVariant = "default" | "neutral" | "primary" | "informative";

// Card init component's props.
export interface CardInitProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardInitVariant;
  children?: React.ReactNode;
}
