/** @format */

import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { PiSneakerMoveDuotone } from "react-icons/pi";
import { t } from "i18next";
import { Icon } from "@/library/core";
import { useDashboardContext, useDashboardLinks } from "@/features/dashboard";
import * as sc from "../DashboardSidebarNavigation.styled";

const _DashboardSidebarAthletesMenu: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const params = useParams();
  const links = useDashboardLinks();
  const dashboard = useDashboardContext();

  // Memoized submenu's headline.
  const submenuHeadlineNode = React.useMemo(() => {
    if (dashboard.view.athlete.loading) {
      return (
        <sc.PleaseWait as={sc.Dropdown.Headline}>
          <span>{t("Please wait")}</span>
        </sc.PleaseWait>
      );
    }
    if (dashboard.view.athlete.name) {
      return (
        <sc.Dropdown.Headline>
          <span>{dashboard.view.athlete.name}</span>
        </sc.Dropdown.Headline>
      );
    }
    return null;
  }, [dashboard.view.athlete.loading, dashboard.view.athlete.name]);

  // Memoized submenu's items.
  const renderSubmenuItems = React.useMemo(() => {
    return (
      <React.Fragment>
        <sc.Dropdown.Item as={sc.Menu.Item}>
          <sc.Dropdown.Link
            as={NavLink}
            to={`${links.athletes}/${params.athleteId}`}
            end>
            <span>{t("Information")}</span>
          </sc.Dropdown.Link>
        </sc.Dropdown.Item>
        <sc.Dropdown.Item as={sc.Menu.Item}>
          <sc.Dropdown.Link
            as={NavLink}
            to={`${links.athletes}/${params.athleteId}/testings`}
            end>
            <span>{t("Testings")}</span>
          </sc.Dropdown.Link>
        </sc.Dropdown.Item>
        <sc.Dropdown.Item as={sc.Menu.Item}>
          <sc.Dropdown.Link
            as={NavLink}
            to={`${links.athletes}/${params.athleteId}/visualization`}
            end>
            <span>{t("Visualization")}</span>
          </sc.Dropdown.Link>
        </sc.Dropdown.Item>
        <sc.Dropdown.Item as={sc.Menu.Item}>
          <sc.Dropdown.Link
            as={NavLink}
            to={`${links.athletes}/${params.athleteId}/interactions`}
            end>
            <span>{t("Interactions")}</span>
          </sc.Dropdown.Link>
        </sc.Dropdown.Item>
      </React.Fragment>
    );
  }, [links.athletes, params.athleteId]);

  // Callback, which renders menu's sub-menu.
  const renderSubmenu = React.useCallback(() => {
    return (
      <sc.Dropdown.Base $isLoading={dashboard.view.athlete.loading}>
        {submenuHeadlineNode}
        {renderSubmenuItems}
      </sc.Dropdown.Base>
    );
  }, [dashboard.view.athlete.loading, renderSubmenuItems, submenuHeadlineNode]);

  return (
    <sc.Menu.Item role="menuitem">
      <sc.Menu.Link
        as={NavLink}
        to={links.athletes}
        data-active={!!params.athleteId}
        end>
        <Icon render={PiSneakerMoveDuotone} size={1.5} />
        <span>{t("Athletes")}</span>
      </sc.Menu.Link>
      {params.athleteId && renderSubmenu()}
    </sc.Menu.Item>
  );
};

export const DashboardSidebarAthletesMenu = React.memo(
  _DashboardSidebarAthletesMenu
);
DashboardSidebarAthletesMenu.displayName =
  "@/pages/DashboardSidebarAthletesMenu";
