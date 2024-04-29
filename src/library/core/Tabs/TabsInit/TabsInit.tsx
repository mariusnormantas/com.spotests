/** @format */

import React from "react";
import { TabsProvider } from "../TabsProvider";
import { TabsInitProps } from "./types";
import * as sc from "./TabsInit.styled";

const _TabsInit = React.forwardRef<HTMLDivElement, TabsInitProps>(
  (
    { defaultValue, keepMounted = true, children },
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <TabsProvider defaultValue={defaultValue} keepMounted={keepMounted}>
        <sc.Component ref={ref} data-component="tabs">
          {children}
        </sc.Component>
      </TabsProvider>
    );
  }
);

export const TabsInit = React.memo(_TabsInit);
TabsInit.displayName = "@/library/core/TabsInit";
