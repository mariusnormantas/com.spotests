/** @format */

import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { useDashboardContext } from "@/features/dashboard";
import { useTeamViewQuery } from "../services";
import { TeamViewProviderReturn } from "./types";

// Creates a context to handle the data.
export const TeamViewContext = React.createContext<TeamViewProviderReturn>(
  {} as TeamViewProviderReturn
);

export const TeamViewProvider: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const { view, updateView } = useDashboardContext();
  const { teamId } = useParams();

  // Retrieves team's data.
  const {
    data: team,
    isLoading,
    isFetching,
    isError,
  } = useTeamViewQuery(
    { teamId: teamId ?? "undefined" },
    { refetchOnWindowFocus: false }
  );

  // Layout effect, which handles dashboard's context which depends on view.
  React.useLayoutEffect(() => {
    if (!team && (isLoading || isFetching) && !view.team.loading) {
      updateView("team", { loading: true });
    } else if (team && team.name !== view.team.name) {
      updateView("team", { name: team.name, loading: false });
    }
  }, [view, updateView, team, isLoading, isFetching, isError]);

  return (
    <TeamViewContext.Provider value={{ team }}>
      <Outlet />
    </TeamViewContext.Provider>
  );
};
