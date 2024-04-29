/** @format */

import React from "react";

export type DashboardViewKey = "organization" | "team" | "trainer" | "athlete";

export type DashboardViewData = {
  name: string | null;
  loading: boolean;
};

export type DashboardView = Record<DashboardViewKey, DashboardViewData>;

export type DashboardProviderProps = object;

export type DashboardProviderReturn = {
  isLoading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarVisible: boolean;
  setSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
  view: DashboardView;
  updateView: (key: DashboardViewKey, data: Partial<DashboardViewData>) => void;
};
