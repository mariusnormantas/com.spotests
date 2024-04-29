/** @format */

import React from "react";
import { matchPath, useLocation } from "react-router-dom";
import { useTabsContext } from "../use-tabs-context";
import { TabsPanelProps } from "./types";
import * as sc from "./TabsPanel.styled";

const _TabsPanel = React.forwardRef<HTMLDivElement, TabsPanelProps>(
  (
    {
      value,
      keepMounted: controlledKeepMounted,
      withRouter,
      children,
      ...rest
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    // Initializes component's hooks, states and etc.
    const { active, keepMounted } = useTabsContext();
    const location = useLocation();

    const targetKeepMounted = controlledKeepMounted ?? keepMounted;

    // Memoized current location's match with defined path.
    const isMatch = React.useMemo(() => {
      if (!withRouter) return false;
      return matchPath(
        {
          path: active,
          end: true,
          caseSensitive: true,
        },
        location.pathname
      );
    }, [withRouter, active, location]);

    // Memoized active tab's state.
    const isActive = React.useMemo(() => {
      if (isMatch || value === active) return true;
      return false;
    }, [isMatch, value, active]);

    // Checks, if panel should be mounted.
    if (!withRouter && !targetKeepMounted && !isActive) return null;
    return (
      <sc.Component
        ref={ref}
        role="tabpanel"
        aria-current={isActive}
        {...rest}
        data-component="tabs-panel">
        {children}
      </sc.Component>
    );
  }
);

export const TabsPanel = React.memo(_TabsPanel);
TabsPanel.displayName = "@/library/core/TabsPanel";
