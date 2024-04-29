/** @format */

import React from "react";

// Tabs item component's props.
export type TabsItemProps = {
  value?: string;
  disabled?: boolean;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  path?: string;
  params?: Record<string, string>;
  children: string;
};
