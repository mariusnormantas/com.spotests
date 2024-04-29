/** @format */

import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { useDashboardContext } from "@/features/dashboard";
import { useTrainerViewQuery } from "../services";
import { TrainerViewProviderProps, TrainerViewProviderReturn } from "./types";

// Creates a context to handle the data.
export const TrainerViewContext =
  React.createContext<TrainerViewProviderReturn>(
    {} as TrainerViewProviderReturn
  );

export const TrainerViewProvider: React.FC<TrainerViewProviderProps> = () => {
  // Initializes component's states, hooks and etc.
  const { view, updateView } = useDashboardContext();
  const { trainerId } = useParams();

  // Retrieves organization's data.
  const {
    data: trainer,
    isLoading,
    isFetching,
  } = useTrainerViewQuery(
    { trainerId: trainerId ?? "undefined" },
    { refetchOnWindowFocus: false }
  );

  // Layout effect, which handles dashboard's context which depends on view.
  React.useLayoutEffect(() => {
    if (!trainer && (isLoading || isFetching) && !view.trainer.loading) {
      updateView("trainer", { loading: true });
    } else if (trainer && trainer.name !== view.trainer.name) {
      updateView("trainer", { name: trainer.name, loading: false });
    }
  }, [view, trainer, isLoading, isFetching, updateView]);

  return (
    <TrainerViewContext.Provider value={{ trainer }}>
      <Outlet />
    </TrainerViewContext.Provider>
  );
};
