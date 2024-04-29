/** @format */

import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { PiHouseDuotone } from "react-icons/pi";
import { t } from "i18next";
import { Icon } from "@/library/core";
import { AuthRoleGuard } from "@/features/auth";
import { useDashboardLinks } from "@/features/dashboard";
import * as sc from "../DashboardSidebarNavigation.styled";

const _DashboardSidebarHomeMenu: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const location = useLocation();
  const links = useDashboardLinks();

  // Memoized item's active status.
  const isActiveItem = React.useMemo(
    () => location.pathname.includes(links.app),
    [links.app, location.pathname]
  );

  // Memoized app's menu for user with "athlete" role.
  const athleteSubmenu = React.useMemo(
    () => (
      <React.Fragment>
        <sc.Dropdown.Item as={sc.Menu.Item}>
          <sc.Dropdown.Link as={NavLink} to="/dashboard/app/testings" end>
            <span>{t("Testings")}</span>
          </sc.Dropdown.Link>
        </sc.Dropdown.Item>
        <sc.Dropdown.Item as={sc.Menu.Item}>
          <sc.Dropdown.Link as={NavLink} to="/dashboard/app/visualization" end>
            <span>{t("Visualization")}</span>
          </sc.Dropdown.Link>
        </sc.Dropdown.Item>
      </React.Fragment>
    ),
    []
  );

  // Callback, which renders menu's sub-menu.
  const renderSubmenu = React.useCallback(() => {
    return (
      <sc.Dropdown.Base $isLoading={false}>
        <sc.Dropdown.Headline>
          <span>{t("My data")}</span>
        </sc.Dropdown.Headline>
        <AuthRoleGuard roles={["athlete"]}>{athleteSubmenu}</AuthRoleGuard>
      </sc.Dropdown.Base>
    );
  }, [athleteSubmenu]);

  return (
    <sc.Menu.Item role="menuitem">
      <sc.Menu.Link
        as={NavLink}
        to="/dashboard/app"
        data-active={location.pathname.includes(`${links.app}/`)}
        end>
        <Icon render={PiHouseDuotone} size={1.5} />
        <span>{t("Home")}</span>
      </sc.Menu.Link>
      {isActiveItem && renderSubmenu()}
    </sc.Menu.Item>
  );
};

export const DashboardSidebarHomeMenu = React.memo(_DashboardSidebarHomeMenu);
DashboardSidebarHomeMenu.displayName = "@/pages/DashboardSidebarHomeMenu";
