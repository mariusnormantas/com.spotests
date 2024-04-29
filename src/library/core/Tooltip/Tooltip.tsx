/** @format */

import React from "react";
import { Popover, PopoverTrigger } from "../Popover";
import { TooltipComponent, TooltipProps } from "./types";
import { TooltipDialog } from "./TooltipDialog";

const _Tooltip: React.FC<TooltipProps> = ({
  placement = "top",
  interactions = ["hover"],
  openDelay = 200,
  closeDelay = 0,
  children,
  ...rest
}) => {
  return (
    <Popover
      placement={placement}
      interactions={interactions}
      openDelay={openDelay}
      closeDelay={closeDelay}
      {...rest}>
      {children}
    </Popover>
  );
};

export const Tooltip = React.memo(_Tooltip) as TooltipComponent;
Tooltip.Trigger = PopoverTrigger;
Tooltip.Dialog = TooltipDialog;
Tooltip.displayName = "@/library/core/Tooltip";
