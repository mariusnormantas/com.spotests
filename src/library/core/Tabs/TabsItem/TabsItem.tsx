/** @format */

import React from "react";
import { matchPath, useLocation, useNavigate } from "react-router-dom";
import { Icon } from "../../Icon";
import { useTabsContext } from "../use-tabs-context";
import { TabsItemProps } from "./types";
import * as sc from "./TabsItem.styled";

const _TabsItem = React.forwardRef<HTMLLIElement, TabsItemProps>(
  (
    { value, disabled, icon, path, params, children },
    ref: React.Ref<HTMLLIElement>
  ) => {
    // Initializes component's hooks, states and etc.
    const { active, setActive } = useTabsContext();
    const navigate = useNavigate();
    const location = useLocation();

    // Memoized current location's match with defined path.
    const isMatch = React.useMemo(() => {
      if (!path) return null;
      return matchPath(
        {
          path,
          end: true,
          caseSensitive: true,
        },
        location.pathname
      );
    }, [location, path]);

    // Memoized isActive status for tab.
    const isActive = React.useMemo(() => {
      if ((active === value && !path) || (path && isMatch && active === path)) {
        return true;
      }
    }, [active, value, path, isMatch]);

    // Callback, which generates tab's path to navigate.
    const getTabPathUrl = React.useCallback(() => {
      // Checks, if path is defined and url should be generated.
      if (!path) return null;
      let url = "";
      const splited = path.split("/");

      // Loop through path's parameters and patch params.
      splited.forEach((key) => {
        const paramKey = key.split(":")[1];
        if (key.includes(":") && params) {
          url += params[paramKey as string] + "/";
          return;
        }
        url += key + "/";
      });
      return url.slice(0, url.length - 1);
    }, [params, path]);

    // Callback which handles change tabs.
    const handleChangeTab = React.useCallback(() => {
      if (disabled) return;
      if (!path && value) {
        setActive(value);
        return;
      }
      if (path) {
        const pathUrl = getTabPathUrl();
        if (pathUrl && location.pathname !== pathUrl) {
          navigate(pathUrl);
          return;
        } else if (location.pathname !== pathUrl) {
          navigate(path);
        }
        setActive(path);
      }
    }, [
      disabled,
      path,
      value,
      setActive,
      getTabPathUrl,
      location.pathname,
      navigate,
    ]);

    // Layout effect, which handles matching tab changes.
    React.useLayoutEffect(() => {
      if (isMatch && active !== value) {
        handleChangeTab();
      }
    }, [isMatch, active, value, handleChangeTab]);

    return (
      <sc.Component
        ref={ref}
        role="tab"
        data-component="tabs-item"
        aria-current={isActive}
        aria-disabled={disabled}
        onClick={handleChangeTab}>
        {icon && <Icon render={icon} size={1.25} />}
        {children}
      </sc.Component>
    );
  }
);

export const TabsItem = React.memo(_TabsItem);
TabsItem.displayName = "@/library/core/TabsItem";
