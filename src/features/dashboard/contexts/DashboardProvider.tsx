/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import {
  DashboardProviderProps,
  DashboardProviderReturn,
  DashboardView,
  DashboardViewData,
  DashboardViewKey,
} from "./types";

// Creates a context to handle the data.
export const DashboardContext = React.createContext<DashboardProviderReturn>(
  {} as DashboardProviderReturn
);

export const DashboardProvider: React.FC<DashboardProviderProps> = () => {
  // Initializes component's states, hooks and etc.
  const [isLoading, setLoading] = React.useState(false);
  const [isSidebarVisible, setSidebarVisible] = React.useState(
    !localStorage.getItem("sidebar") ||
      localStorage.getItem("sidebar") === "hidden"
      ? false
      : true
  );
  const [view, setView] = React.useState<DashboardView>({
    organization: { name: null, loading: false },
    team: { name: null, loading: false },
    trainer: { name: null, loading: false },
    athlete: { name: null, loading: false },
  });

  // Callback, which updates target view's data.
  const updateView = React.useMemo(
    () => (key: DashboardViewKey, data: Partial<DashboardViewData>) => {
      setView((current) => ({
        ...current,
        [key]: {
          ...current[key],
          ...data,
        },
      }));
    },
    []
  );

  // Layout effect, which handles local storage's update.
  React.useLayoutEffect(() => {
    localStorage.setItem("sidebar", isSidebarVisible ? "visible" : "hidden");
  }, [isSidebarVisible]);

  // Layout effect, which updates loading state, depending on view.
  React.useLayoutEffect(() => {
    if (
      view.organization.loading ||
      view.team.loading ||
      view.trainer.loading ||
      view.athlete.loading
    ) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [view, isLoading]);

  return (
    <DashboardContext.Provider
      value={{
        isLoading,
        setLoading,
        isSidebarVisible,
        setSidebarVisible,
        view,
        updateView,
      }}>
      <Outlet />
    </DashboardContext.Provider>
  );
};
