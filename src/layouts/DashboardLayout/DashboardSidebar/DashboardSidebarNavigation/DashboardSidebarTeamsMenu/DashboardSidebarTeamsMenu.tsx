/** @format */

import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { PiFlagDuotone } from "react-icons/pi";
import { t } from "i18next";
import { Icon } from "@/library/core";
import { useDashboardContext, useDashboardLinks } from "@/features/dashboard";
import * as sc from "../DashboardSidebarNavigation.styled";

const _DashboardSidebarTeamsMenu: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const params = useParams();
  const links = useDashboardLinks();
  const dashboard = useDashboardContext();

  // Memoized submenu's headline.
  const submenuHeadlineNode = React.useMemo(() => {
    if (dashboard.view.team.loading) {
      return (
        <sc.PleaseWait as={sc.Dropdown.Headline}>
          <span>{t("Please wait")}</span>
        </sc.PleaseWait>
      );
    }
    if (dashboard.view.team.name) {
      return (
        <sc.Dropdown.Headline>
          <span>{dashboard.view.team.name}</span>
        </sc.Dropdown.Headline>
      );
    }
    return null;
  }, [dashboard.view.team.loading, dashboard.view.team.name]);

  // Memoized submenu's items.
  const renderSubmenuItems = React.useMemo(() => {
    return (
      <React.Fragment>
        <sc.Dropdown.Item as={sc.Menu.Item}>
          <sc.Dropdown.Link
            as={NavLink}
            to={`${links.teams}/${params.teamId}`}
            end>
            <span>{t("Information")}</span>
          </sc.Dropdown.Link>
        </sc.Dropdown.Item>
        <sc.Dropdown.Item as={sc.Menu.Item}>
          <sc.Dropdown.Link
            as={NavLink}
            to={`${links.teams}/${params.teamId}/interactions`}
            end>
            <span>{t("Interactions")}</span>
          </sc.Dropdown.Link>
        </sc.Dropdown.Item>
      </React.Fragment>
    );
  }, [links.teams, params.teamId]);

  // Callback, which renders menu's sub-menu.
  const renderSubmenu = React.useCallback(() => {
    return (
      <sc.Dropdown.Base $isLoading={dashboard.view.team.loading}>
        {submenuHeadlineNode}
        {renderSubmenuItems}
      </sc.Dropdown.Base>
    );
  }, [dashboard.view.team.loading, renderSubmenuItems, submenuHeadlineNode]);

  return (
    <sc.Menu.Item role="menuitem">
      <sc.Menu.Link
        as={NavLink}
        to={links.teams}
        data-active={!!params.teamId}
        end>
        <Icon render={PiFlagDuotone} size={1.5} />
        <span>{t("Teams")}</span>
      </sc.Menu.Link>
      {params.teamId && renderSubmenu()}
    </sc.Menu.Item>
  );
};

export const DashboardSidebarTeamsMenu = React.memo(_DashboardSidebarTeamsMenu);
DashboardSidebarTeamsMenu.displayName = "@/pages/DashboardSidebarTeamsMenu";
