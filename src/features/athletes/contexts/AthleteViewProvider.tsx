/** @format */

import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { useDashboardContext } from "@/features/dashboard";
import { useAthleteViewQuery } from "../services";
import { AthleteViewProviderProps, AthleteViewProviderReturn } from "./types";

// Creates a context to handle the data.
export const AthleteViewContext =
  React.createContext<AthleteViewProviderReturn>(
    {} as AthleteViewProviderReturn
  );

export const AthleteViewProvider: React.FC<AthleteViewProviderProps> = () => {
  // Initializes component's states, hooks and etc.
  const { view, updateView } = useDashboardContext();
  const { athleteId } = useParams();

  // Retrieves athlete's data.
  const {
    data: athlete,
    isLoading,
    isFetching,
  } = useAthleteViewQuery(
    { athleteId: athleteId ?? "undefined" },
    { refetchOnWindowFocus: false }
  );

  // Layout effect, which handles dashboard's context which depends on view.
  React.useLayoutEffect(() => {
    if (!athlete && (isLoading || isFetching) && !view.athlete.loading) {
      updateView("athlete", { loading: true });
    } else if (athlete && athlete.name !== view.athlete.name) {
      updateView("athlete", { name: athlete.name, loading: false });
    }
  }, [view, athlete, isLoading, isFetching, updateView]);

  return (
    <AthleteViewContext.Provider value={{ athlete }}>
      <Outlet />
    </AthleteViewContext.Provider>
  );
};
