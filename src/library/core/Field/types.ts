/** @format */

import React from "react";

// Field component's direction.
export type FieldDirection = "column" | "row";

// Field component's props.
export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: FieldDirection;
  label?: string;
  afterLabel?: React.ReactNode;
  asterisk?: boolean;
  description?: React.ReactNode;
  validation?: string;
  hideValidation?: boolean;
  children: React.ReactElement<any, React.JSXElementConstructor<HTMLElement>>;
}
