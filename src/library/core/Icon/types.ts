/** @format */

import React from "react";

// Icon component's props.
export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  render: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  size?: number;
}
