/** @format */

import React from "react";
import { useTranslation } from "react-i18next";
import { PageProps } from "./types";
import * as sc from "./Page.styled";

const _Page = React.forwardRef<HTMLDivElement, PageProps>(
  ({ title, children, ...rest }, ref: React.Ref<HTMLDivElement>) => {
    // Initializes component's states, hooks and etc.
    const { t } = useTranslation();

    // Memoized page's translated default title.
    const defaultTitle = React.useMemo(
      () => t("Strategies for effective training"),
      [t]
    );

    // Memoized actual current page's title.
    const formattedTitle = React.useMemo(() => {
      return `${title ?? defaultTitle} | Spotests.com`;
    }, [defaultTitle, title]);

    // Layout effect, which updates document's title.
    React.useLayoutEffect(() => {
      if (document.title !== formattedTitle) {
        document.title = formattedTitle;
      }
    }, [formattedTitle]);

    return (
      <sc.Component ref={ref} {...rest} data-component="page">
        {children}
      </sc.Component>
    );
  }
);

export const Page = React.memo(_Page);
Page.displayName = "@/library/core/Page";
