/** @format */

import { Popover } from "../Popover";
import { MenuComponent } from "./types";
import { MenuTrigger } from "./MenuTrigger";
import { MenuDialog } from "./MenuDialog";
import { MenuHeadline } from "./MenuHeadline";
import { MenuItem } from "./MenuItem";
import { MenuProvider } from "./MenuProvider";

export const Menu: MenuComponent = ({
  interactions = ["click", "dismiss"],
  autoClose,
  children,
  ...rest
}) => {
  return (
    <Popover interactions={interactions} {...rest}>
      <MenuProvider autoClose={autoClose}>{children}</MenuProvider>
    </Popover>
  );
};

Menu.Trigger = MenuTrigger;
Menu.Dialog = MenuDialog;
Menu.Headline = MenuHeadline;
Menu.Item = MenuItem;
Menu.displayName = "@/library/core/Menu";
