/** @format */

import React from "react";
import { MenuHeadlineProps } from "./types";
import * as sc from "./MenuHeadline.styled";

const _MenuHeadline: React.FC<MenuHeadlineProps> = ({ children, ...rest }) => {
  return (
    <sc.Component {...rest} data-component="menu-headline">
      <sc.Container>{children}</sc.Container>
    </sc.Component>
  );
};

export const MenuHeadline = React.memo(_MenuHeadline);
MenuHeadline.displayName = "@/library/core/MenuHeadline";
