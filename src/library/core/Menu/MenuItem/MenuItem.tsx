/** @format */

import React from "react";
import { Icon } from "../../Icon";
import { useMenuContext } from "../MenuProvider";
import { MenuItemProps } from "./types";
import * as sc from "./MenuItem.styled";

const _MenuItem = React.forwardRef<HTMLButtonElement, MenuItemProps>(
  (
    { variant = "default", icon, disabled, onClick, children, ...rest },
    ref: React.Ref<HTMLButtonElement>
  ) => {
    // Initializes component's states, hooks and etc.
    const { popover, autoClose } = useMenuContext();

    // Callback, which handles click on item event.
    const handleClick = React.useCallback(
      (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (disabled) return null;
        onClick?.(e);
        if (popover && autoClose) {
          popover.setOpen(false);
        }
      },
      [disabled, onClick, popover, autoClose]
    );

    return (
      <sc.Component
        ref={ref}
        disabled={disabled}
        onClick={handleClick}
        {...rest}
        data-component="menu-item"
        $variant={variant}>
        <sc.Container>
          {icon && <Icon render={icon} size={1.25} />}
          <sc.Content>{children}</sc.Content>
        </sc.Container>
      </sc.Component>
    );
  }
);

export const MenuItem = React.memo(_MenuItem);
MenuItem.displayName = "@/library/core/MenuItem";
