/** @format */

import React from "react";
import { Popover } from "../../Popover";
import { MenuDialogProps } from "./types";
import * as sc from "./MenuDialog.styled";

const _MenuDialog = React.forwardRef<HTMLDivElement, MenuDialogProps>(
  ({ children, ...rest }, ref: React.Ref<HTMLDivElement>) => {
    return (
      <sc.Component
        as={Popover.Floating}
        ref={ref}
        {...rest}
        data-component="menu-dialog">
        {children}
      </sc.Component>
    );
  }
);

export const MenuDialog = React.memo(_MenuDialog);
MenuDialog.displayName = "@/library/core/MenuDialog";
