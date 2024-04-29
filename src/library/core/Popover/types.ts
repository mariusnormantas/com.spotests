/** @format */

import React from "react";
import { Placement } from "@floating-ui/react";
import { PopoverTriggerProps } from "./PopoverTrigger";
import { PopoverFloatingProps } from "./PopoverFloating";
import { usePopover } from "./use-popover";

// Popover component's props.
export type PopoverProps = {
  initialOpen?: boolean;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  placement?: Placement;
  modal?: boolean;
  interactions?: Array<"click" | "hover" | "dismiss">;
  openDelay?: number;
  closeDelay?: number;
  width?: string | number;
  matchWidth?: boolean;
  offset?: number;
  children?: React.ReactNode;
};

// Popover component, includes relative components.
export type PopoverComponent = React.FC<PopoverProps> & {
  Trigger: React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      PopoverTriggerProps & React.RefAttributes<HTMLElement>
    >
  >;
  Floating: React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      PopoverFloatingProps & React.RefAttributes<HTMLElement>
    >
  >;
};

export type UsePopoverReturn = ReturnType<typeof usePopover> | null;
