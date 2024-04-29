/** @format */

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDashboardContext } from "@/features/dashboard";
import { DashboardSidebarBrand } from "./DashboardSidebarBrand";
import { DashboardSidebarNavigation } from "./DashboardSidebarNavigation";
import { DashboardSidebarAccount } from "./DashboardSidebarAccount";
import * as sc from "./DashboardSidebar.styled";

const _DashboardSidebar: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const { isSidebarVisible } = useDashboardContext();

  return (
    <AnimatePresence>
      <sc.Component
        as={motion.div}
        initial={{ opacity: 0, transform: "translateX(-100%)" }}
        animate={{
          opacity: [0, 1],
          transform: ["translateX(-100%)", "translateX(0)"],
        }}
        exit={{ opacity: 0, transform: "translateX(-100%)" }}
        style={{
          transitionProperty: "transform",
          willChange: "transform",
        }}
        transition={{ duration: 0.2 }}
        $isExpanded={isSidebarVisible}>
        <sc.Block as={DashboardSidebarBrand} />
        <sc.Spacer />
        <sc.Separator />
        <sc.Block as={sc.NavigationBlock}>
          <DashboardSidebarNavigation />
        </sc.Block>
        <sc.Separator />
        <sc.Spacer />
        <sc.Block
          as={DashboardSidebarAccount}
          $hoverable={true}
          $clickable={true}
        />
      </sc.Component>
    </AnimatePresence>
  );
};

export const DashboardSidebar = React.memo(_DashboardSidebar);
DashboardSidebar.displayName = "@/layouts/DashboardSidebar";
