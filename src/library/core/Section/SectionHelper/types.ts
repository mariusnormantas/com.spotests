/** @format */

import React from "react";

export type SectionHelperVariant =
  | "informative"
  | "success"
  | "warning"
  | "danger";

export interface SectionHelperProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: SectionHelperVariant;
}
