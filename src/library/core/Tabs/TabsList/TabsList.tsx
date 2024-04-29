/** @format */

import React from "react";
import { TabsListProps } from "./types";
import * as sc from "./TabsList.styled";

const _TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ children }, ref: React.Ref<HTMLDivElement>) => {
    return (
      <sc.Component ref={ref} data-component="tabs-list">
        <sc.Scrollable role="tablist">{children}</sc.Scrollable>
      </sc.Component>
    );
  }
);

export const TabsList = React.memo(_TabsList);
TabsList.displayName = "@/library/core/TabsList";
