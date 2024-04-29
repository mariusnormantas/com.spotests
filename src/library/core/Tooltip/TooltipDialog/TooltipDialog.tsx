/** @format */

import React from "react";
import { FloatingArrow } from "@floating-ui/react";
import { Popover, usePopoverContext } from "../../Popover";
import { TooltipDialogProps } from "./types";
import * as sc from "./TooltipDialog.styled";

const _TooltipDialog = React.forwardRef<HTMLDivElement, TooltipDialogProps>(
  ({ children, ...rest }, ref: React.Ref<HTMLDivElement>) => {
    // Initializes component's states, hooks and etc.
    const { context, arrowRef } = usePopoverContext();

    return (
      <React.Fragment>
        <sc.Component
          as={Popover.Floating}
          ref={ref}
          data-component="tooltip"
          {...rest}>
          <FloatingArrow ref={arrowRef} context={context} tipRadius={1} />
          {children}
        </sc.Component>
      </React.Fragment>
    );
  }
);

export const TooltipDialog = React.memo(_TooltipDialog);
TooltipDialog.displayName = "@/library/core/TooltipDialog";
