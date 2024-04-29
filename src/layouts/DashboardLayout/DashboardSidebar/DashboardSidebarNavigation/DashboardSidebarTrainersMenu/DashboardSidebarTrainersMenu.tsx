/** @format */

import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { PiBaseballCapDuotone } from "react-icons/pi";
import { t } from "i18next";
import { Icon } from "@/library/core";
import { useDashboardContext, useDashboardLinks } from "@/features/dashboard";
import * as sc from "../DashboardSidebarNavigation.styled";

const _DashboardSidebarTrainersMenu: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const params = useParams();
  const links = useDashboardLinks();
  const dashboard = useDashboardContext();

  // Memoized submenu's headline.
  const submenuHeadlineNode = React.useMemo(() => {
    if (dashboard.view.trainer.loading) {
      return (
        <sc.PleaseWait as={sc.Dropdown.Headline}>
          <span>{t("Please wait")}</span>
        </sc.PleaseWait>
      );
    }
    if (dashboard.view.trainer.name) {
      return (
        <sc.Dropdown.Headline>
          <span>{dashboard.view.trainer.name}</span>
        </sc.Dropdown.Headline>
      );
    }
    return null;
  }, [dashboard.view.trainer.loading, dashboard.view.trainer.name]);

  // Memoized submenu's items.
  const renderSubmenuItems = React.useMemo(() => {
    return (
      <React.Fragment>
        <sc.Dropdown.Item as={sc.Menu.Item}>
          <sc.Dropdown.Link
            as={NavLink}
            to={`${links.trainers}/${params.trainerId}`}
            end>
            <span>{t("Information")}</span>
          </sc.Dropdown.Link>
        </sc.Dropdown.Item>
        <sc.Dropdown.Item as={sc.Menu.Item}>
          <sc.Dropdown.Link
            as={NavLink}
            to={`${links.trainers}/${params.trainerId}/interactions`}
            end>
            <span>{t("Interactions")}</span>
          </sc.Dropdown.Link>
        </sc.Dropdown.Item>
      </React.Fragment>
    );
  }, [links.trainers, params.trainerId]);

  // Callback, which renders menu's sub-menu.
  const renderSubmenu = React.useCallback(() => {
    return (
      <sc.Dropdown.Base $isLoading={dashboard.view.trainer.loading}>
        {submenuHeadlineNode}
        {renderSubmenuItems}
      </sc.Dropdown.Base>
    );
  }, [dashboard.view.trainer.loading, renderSubmenuItems, submenuHeadlineNode]);

  return (
    <sc.Menu.Item role="menuitem">
      <sc.Menu.Link
        as={NavLink}
        to={links.trainers}
        data-active={!!params.trainerId}
        end>
        <Icon render={PiBaseballCapDuotone} size={1.5} />
        <span>{t("Trainers")}</span>
      </sc.Menu.Link>
      {params.trainerId && renderSubmenu()}
    </sc.Menu.Item>
  );
};

export const DashboardSidebarTrainersMenu = React.memo(
  _DashboardSidebarTrainersMenu
);
DashboardSidebarTrainersMenu.displayName =
  "@/pages/DashboardSidebarTrainersMenu";
