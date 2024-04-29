/** @format */

import React from "react";
import { TabsListProps } from "./TabsList";
import { TabsItemProps } from "./TabsItem";
import { TabsPanelProps } from "./TabsPanel";
import { TabsInitProps } from "./TabsInit";

// Tabs provider's props.
export type TabsProviderProps = {
  defaultValue?: string;
  keepMounted?: boolean;
  children: React.ReactNode;
};

// Tabs provider's return.
export interface TabsProviderReturn
  extends Omit<TabsProviderProps, "children"> {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

// Tabs component's props.
export type TabsProps = {
  children: React.ReactNode;
};

// Tabs component, including relative components.
export type TabsComponent = React.FC<TabsProps> & {
  Init: React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      TabsInitProps & React.RefAttributes<HTMLDivElement>
    >
  >;
  List: React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      TabsListProps & React.RefAttributes<HTMLDivElement>
    >
  >;
  Item: React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      TabsItemProps & React.RefAttributes<HTMLLIElement>
    >
  >;
  Panel: React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      TabsPanelProps & React.RefAttributes<HTMLDivElement>
    >
  >;
};
