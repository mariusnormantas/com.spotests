/** @format */

import React from "react";
import { SectionInitProps } from "./SectionInit";
import { SectionHeaderProps } from "./SectionHeader";
import { SectionHelperProps } from "./SectionHelper";

// Section component's props.
export type SectionProps = {
  children?: React.ReactNode;
};

// Section component, including relative components.
export type SectionComponent = React.FC<SectionProps> & {
  Init: React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      SectionInitProps & React.RefAttributes<HTMLElement>
    >
  >;
  Header: React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      SectionHeaderProps & React.RefAttributes<HTMLDivElement>
    >
  >;
  Helper: React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      SectionHelperProps & React.RefAttributes<HTMLDivElement>
    >
  >;
};
