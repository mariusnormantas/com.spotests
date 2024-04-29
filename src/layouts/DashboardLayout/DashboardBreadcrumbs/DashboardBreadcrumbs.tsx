/** @format */

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  PiCaretDownFill,
  PiCaretRightBold,
  PiHouseDuotone,
} from "react-icons/pi";
import { t } from "i18next";
import { BreadcrumbData } from "use-react-router-breadcrumbs";
import { Button, Icon, Menu } from "@/library/core";
import { useDashboardBreadcrumbs } from "@/features/dashboard";
import * as sc from "./DashboardBreadcrumbs.styled";

const MAX_BREADCRUMBS = 4;

export const DashboardBreadcrumbs: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const navigate = useNavigate();
  const dashboardBreadcrumbs = useDashboardBreadcrumbs();

  // Memoized breadcrumbs,which is sliced, not to be too long.
  const breadcrumbs = React.useMemo(() => {
    if (dashboardBreadcrumbs.length > MAX_BREADCRUMBS) {
      return dashboardBreadcrumbs.slice(
        dashboardBreadcrumbs.length - MAX_BREADCRUMBS
      );
    }
    return dashboardBreadcrumbs;
  }, [dashboardBreadcrumbs]);

  // Callback which returns breadcrumb label's node.
  const breadcrumbLabel = React.useCallback((data: BreadcrumbData<string>) => {
    if (window.location.pathname === data.match.pathname) {
      return <span>{data.breadcrumb}</span>;
    }
    return <Link to={data.match.pathname}>{data.breadcrumb}</Link>;
  }, []);

  // Memoized sliced breadcrumbs dropdown node.
  const slicedBreadcrumbsNode = React.useMemo(() => {
    return (
      <sc.Breadcrumb>
        <Menu placement="bottom-start">
          <Menu.Trigger>
            <Button
              variant="neutral"
              size="extra-small"
              iconEnd={PiCaretDownFill}>
              {t("Show more")}
            </Button>
          </Menu.Trigger>
          <Menu.Dialog>
            <Menu.Headline>{t("Spotests.com")}</Menu.Headline>
            {dashboardBreadcrumbs
              .slice(0, dashboardBreadcrumbs.length - MAX_BREADCRUMBS)
              .map((item, key) => (
                <Menu.Item key={key} onClick={() => navigate(item.key)}>
                  {item.breadcrumb}
                </Menu.Item>
              ))}
          </Menu.Dialog>
        </Menu>
      </sc.Breadcrumb>
    );
  }, [dashboardBreadcrumbs, navigate]);

  // Memoized static breadcrumbs node.
  const staticBreadcrumbsNode = React.useMemo(() => {
    return (
      <React.Fragment>
        <sc.Breadcrumb>
          <Icon render={PiHouseDuotone} size={1.25} />
        </sc.Breadcrumb>
        <sc.Breadcrumb>
          <span>{t("Spotests.com")}</span>
        </sc.Breadcrumb>
        <sc.Breadcrumb>
          <Icon render={PiCaretRightBold} />
        </sc.Breadcrumb>
      </React.Fragment>
    );
  }, []);

  // Memoized breadcrumbs node.
  const breadcrumbsNode = React.useMemo(() => {
    return breadcrumbs.map((item, key) => (
      <React.Fragment key={key}>
        <sc.Breadcrumb>{breadcrumbLabel(item)}</sc.Breadcrumb>
        {key + 1 < breadcrumbs.length && (
          <sc.Breadcrumb>
            <Icon render={PiCaretRightBold} />
          </sc.Breadcrumb>
        )}
      </React.Fragment>
    ));
  }, [breadcrumbLabel, breadcrumbs]);

  // Checks, if breadcrumbs exists and is type of array.
  if (!breadcrumbs || !Array.isArray(breadcrumbs)) return null;
  return (
    <sc.Component>
      {dashboardBreadcrumbs.length > MAX_BREADCRUMBS
        ? slicedBreadcrumbsNode
        : staticBreadcrumbsNode}
      {breadcrumbsNode}
    </sc.Component>
  );
};
