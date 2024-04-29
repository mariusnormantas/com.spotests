/** @format */

import React from "react";
import { PopoverProps, UsePopoverReturn } from "../Popover";
import { MenuDialogProps } from "./MenuDialog";
import { MenuHeadlineProps } from "./MenuHeadline";
import { MenuItemProps } from "./MenuItem";
import { MenuTriggerProps } from "./MenuTrigger";

// Menu provider's props.
export type MenuProviderProps = {
  autoClose?: boolean;
  children: React.ReactNode;
};

// Menu provider's return.
export type MenuProviderReturn = {
  popover: UsePopoverReturn;
  autoClose: boolean;
};

// Menu component's props.
export interface MenuProps extends PopoverProps {
  autoClose?: boolean;
}

// Menu component, including relative components.
export type MenuComponent = React.FC<MenuProps> & {
  Trigger: React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      MenuTriggerProps & React.RefAttributes<HTMLElement>
    >
  >;
  Dialog: React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      MenuDialogProps & React.RefAttributes<HTMLDivElement>
    >
  >;
  Headline: React.FC<MenuHeadlineProps>;
  Item: React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      MenuItemProps & React.RefAttributes<HTMLButtonElement>
    >
  >;
};
