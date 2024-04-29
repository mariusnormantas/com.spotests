/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import { useModalStore } from "./use-modal-store";
import { ModalPortal } from "./ModalPortal";
import { ModalsProviderProps, UseModalStoreReturn } from "./types";

export const ModalsContext = React.createContext<UseModalStoreReturn>(
  {} as UseModalStoreReturn
);

export const ModalsProvider: React.FC<ModalsProviderProps> = () => {
  // Initializes component's hooks, states and etc.
  const store = useModalStore();
  return (
    <ModalsContext.Provider value={store}>
      {/* Provider should be rendered inside of the <Routes/>, to be able access router's params and other features. */}
      <Outlet />
      <ModalPortal />
    </ModalsContext.Provider>
  );
};
