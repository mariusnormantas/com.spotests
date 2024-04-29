/** @format */

import React from "react";
import { Popover } from "../../Popover";
import { MenuTriggerProps } from "./types";

const _MenuTrigger = React.forwardRef<HTMLElement, MenuTriggerProps>(
  ({ children, ...rest }, ref: React.Ref<HTMLElement>) => {
    return (
      <Popover.Trigger ref={ref} {...rest} data-component="menu-trigger">
        {children}
      </Popover.Trigger>
    );
  }
);

export const MenuTrigger = React.memo(_MenuTrigger);
MenuTrigger.displayName = "@/library/core/MenuTrigger";
