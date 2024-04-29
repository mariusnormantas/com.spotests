/** @format */

import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { PiBuildingsDuotone } from "react-icons/pi";
import { t } from "i18next";
import { Icon } from "@/library/core";
import { useDashboardContext, useDashboardLinks } from "@/features/dashboard";
import * as sc from "../DashboardSidebarNavigation.styled";

const _DashboardSidebarOrganizationsMenu: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const params = useParams();
  const links = useDashboardLinks();
  const dashboard = useDashboardContext();

  // Memoized submenu's headline.
  const submenuHeadlineNode = React.useMemo(() => {
    if (dashboard.view.organization.loading) {
      return (
        <sc.Dropdown.Headline as={sc.PleaseWait}>
          <span>{t("Please wait")}</span>
        </sc.Dropdown.Headline>
      );
    }
    if (dashboard.view.organization.name) {
      return (
        <sc.Dropdown.Headline>
          <span>{dashboard.view.organization.name}</span>
        </sc.Dropdown.Headline>
      );
    }
    return null;
  }, [dashboard.view.organization.loading, dashboard.view.organization.name]);

  // Memoized submenu's items.
  const renderSubmenuItems = React.useMemo(() => {
    return (
      <React.Fragment>
        <sc.Dropdown.Item as={sc.Menu.Item}>
          <sc.Dropdown.Link
            as={NavLink}
            to={`${links.organizations}/${params.organizationId}`}
            end>
            <span>{t("Information")}</span>
          </sc.Dropdown.Link>
        </sc.Dropdown.Item>
        <sc.Dropdown.Item as={sc.Menu.Item}>
          <sc.Dropdown.Link
            as={NavLink}
            to={`${links.organizations}/${params.organizationId}/interactions`}
            end>
            <span>{t("Interactions")}</span>
          </sc.Dropdown.Link>
        </sc.Dropdown.Item>
      </React.Fragment>
    );
  }, [links.organizations, params.organizationId]);

  // Callback, which renders menu's sub-menu.
  const renderSubmenu = React.useCallback(() => {
    return (
      <sc.Dropdown.Base $isLoading={dashboard.view.organization.loading}>
        {submenuHeadlineNode}
        {renderSubmenuItems}
      </sc.Dropdown.Base>
    );
  }, [
    dashboard.view.organization.loading,
    renderSubmenuItems,
    submenuHeadlineNode,
  ]);

  return (
    <sc.Menu.Item role="menuitem">
      <sc.Menu.Link
        as={NavLink}
        to={links.organizations}
        data-active={!!params.organizationId}
        end>
        <Icon render={PiBuildingsDuotone} size={1.5} />
        <span>{t("Organizations")}</span>
      </sc.Menu.Link>
      {params.organizationId && renderSubmenu()}
    </sc.Menu.Item>
  );
};

export const DashboardSidebarOrganizationsMenu = React.memo(
  _DashboardSidebarOrganizationsMenu
);
DashboardSidebarOrganizationsMenu.displayName =
  "@/pages/DashboardSidebarOrganizationsMenu";
