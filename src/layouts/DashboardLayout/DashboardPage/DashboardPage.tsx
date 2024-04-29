/** @format */

import React from "react";
import { Page } from "@/library/core";
import { useDashboardContext } from "@/features/dashboard";
import { DashboardPageHeader } from "./DashboardPageHeader";
import { DashboardPageProps } from "./types";
import * as sc from "./DashboardPage.styled";

const _DashboardPage: React.FC<DashboardPageProps> = ({
  title,
  tagline,
  headerSection,
  children,
}) => {
  // Initializes component's states, hooks and etc.
  const dashboard = useDashboardContext();
  const combinedTitle = tagline ? `${title} - ${tagline}` : title;

  // Memoized page header's node.
  const headerNode = React.useMemo(
    () => (
      <DashboardPageHeader title={title} tagline={tagline}>
        {headerSection}
      </DashboardPageHeader>
    ),
    [headerSection, tagline, title]
  );

  // Waits, until dashboard's block of loading changes state to false.
  if (dashboard.isLoading) return null;
  return (
    <sc.Component as={Page} title={combinedTitle}>
      <sc.Wrapper>
        <sc.Main>
          {headerNode}
          {children}
        </sc.Main>
      </sc.Wrapper>
    </sc.Component>
  );
};

export const DashboardPage = React.memo(_DashboardPage);
DashboardPage.displayName = "@/layouts/DashboardPage";
