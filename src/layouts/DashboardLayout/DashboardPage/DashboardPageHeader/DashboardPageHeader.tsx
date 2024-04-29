/** @format */

import React from "react";
import { PiBookmarksDuotone } from "react-icons/pi";
import { Icon } from "@/library/core";
import { DashboardBreadcrumbs } from "../../DashboardBreadcrumbs";
import { DashboardPageHeaderProps } from "./types";
import * as sc from "./DashboardPageHeader.styled";

const _DashboardPageHeader: React.FC<DashboardPageHeaderProps> = ({
  title,
  tagline,
  children,
}) => {
  // Memoized breadcrumbs node.
  const breadcrumbsNode = React.useMemo(() => {
    return <DashboardBreadcrumbs />;
  }, []);

  // Memoized header's title.
  const titleNode = React.useMemo(() => {
    return (
      <sc.Title>
        <span>{title}</span>
      </sc.Title>
    );
  }, [title]);

  // Memoized header's tagline.
  const taglineNode = React.useMemo(() => {
    return (
      <sc.Tagline>
        <Icon render={PiBookmarksDuotone} size={1.25} />
        <span>{tagline}</span>
      </sc.Tagline>
    );
  }, [tagline]);

  return (
    <React.Fragment>
      <sc.Component>
        <sc.Wrapper>
          <sc.Container>
            {breadcrumbsNode}
            {title && titleNode}
          </sc.Container>
          {children && <sc.Actions>{children}</sc.Actions>}
        </sc.Wrapper>
        {tagline && taglineNode}
      </sc.Component>
    </React.Fragment>
  );
};

export const DashboardPageHeader = React.memo(_DashboardPageHeader);
DashboardPageHeader.displayName = "@/layouts/DashboardPageHeader";
