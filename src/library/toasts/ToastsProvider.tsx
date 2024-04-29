/** @format */

import React from "react";
import { useToastsStore } from "./use-toasts-store";
import { ToastsPortal } from "./ToastsPortal";
import { ToastsProviderProps, ToastsProviderReturn } from "./types";
import { Outlet } from "react-router-dom";

export const ToastsContext = React.createContext<ToastsProviderReturn>(
  {} as ToastsProviderReturn
);

export const ToastsProvider: React.FC<ToastsProviderProps> = () => {
  // Initializes component's hooks, states and etc.
  const store = useToastsStore();

  return (
    <ToastsContext.Provider value={{ store }}>
      {/* Provider should be rendered inside of the <Routes/>, to be able access router's params and other features. */}
      <Outlet />
      <ToastsPortal />
    </ToastsContext.Provider>
  );
};
