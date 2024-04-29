/** @format */

import React from "react";

// Modal component's sizes.
export type ModalSize = "small" | "medium" | "large" | "extra-large";

// Modal component's props.
export interface ModalInitProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ModalSize;
  disabled?: boolean;
  children: React.ReactNode;
}
