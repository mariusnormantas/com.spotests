/** @format */

import { TabsInit } from "./TabsInit";
import { TabsList } from "./TabsList";
import { TabsItem } from "./TabsItem";
import { TabsPanel } from "./TabsPanel";
import { TabsComponent } from "./types";

export const Tabs: TabsComponent = ({ children }) => children;

Tabs.Init = TabsInit;
Tabs.List = TabsList;
Tabs.Item = TabsItem;
Tabs.Panel = TabsPanel;
Tabs.displayName = "@/library/core/Tabs";
