/** @format */

import React from "react";
import { PopoverProps, PopoverTriggerProps } from "../Popover";
import { TooltipDialogProps } from "./TooltipDialog";

// Tooltip component's props.
export interface TooltipProps extends PopoverProps {
  autoClose?: boolean;
}

// Tooltip component, including relative components.
export type TooltipComponent = React.NamedExoticComponent<TooltipProps> & {
  Trigger: React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      PopoverTriggerProps & React.RefAttributes<HTMLElement>
    >
  >;
  Dialog: React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      TooltipDialogProps & React.RefAttributes<HTMLDivElement>
    >
  >;
};
