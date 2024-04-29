/** @format */

import React from "react";
// import { PiArrowLineLeftBold, PiArrowLineRightBold } from "react-icons/pi";
import { t } from "i18next";
import LogoSVG from "@/assets/images/logo.svg";
// import { Icon } from "@/library/core";
// import { useDashboardContext } from "@/features/dashboard";
import { useAuthContext } from "@/features/auth";
import { DashboardSidebarBrandProps } from "./types";
import * as sc from "./DashboardSidebarBrand.styled";

const _DashboardSidebarBrand: React.FC<DashboardSidebarBrandProps> = (
  props
) => {
  // Initializes component's states, hooks and etc.
  const { user } = useAuthContext();
  // const { isSidebarVisible, setSidebarVisible } = useDashboardContext();

  // Memoized logo's node.
  const logoNode = React.useMemo(() => {
    return (
      <sc.Logo.Container>
        <sc.Logo.Image src={LogoSVG} alt={t("Spotests.com")} />
      </sc.Logo.Container>
    );
  }, []);

  // Memoized container's node.
  const containerNode = React.useMemo(() => {
    return (
      <sc.Container>
        {user && <sc.Role>{t(user.role.capitalize())}</sc.Role>}
        <sc.Title>{t("Spotests.com")}</sc.Title>
      </sc.Container>
    );
  }, [user]);

  // Memoized expand button's node.
  // const expandNode = React.useMemo(() => {
  //   return (
  //     <sc.Button
  //       as={Icon}
  //       render={isSidebarVisible ? PiArrowLineLeftBold : PiArrowLineRightBold}
  //       onClick={() => {
  //         setSidebarVisible((current) => !current);
  //       }}
  //       size={1.25}
  //     />
  //   );
  // }, [isSidebarVisible, setSidebarVisible]);

  return (
    <sc.Component {...props}>
      {logoNode}
      {containerNode}
    </sc.Component>
  );
};

export const DashboardSidebarBrand = React.memo(_DashboardSidebarBrand);
DashboardSidebarBrand.displayName = "@/layouts/DashboardSidebarBrand";
