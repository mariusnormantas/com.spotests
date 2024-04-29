/** @format */

import { Route, Routes } from "react-router-dom";
import { authRoutes, dashboardRoutes, publicRoutes } from "@/routes";
import { ModalsProvider } from "@/library/modals";
import { ToastsProvider } from "@/library/toasts";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<ToastsProvider />}>
        <Route element={<ModalsProvider />}>
          {publicRoutes}
          {authRoutes}
          {dashboardRoutes}
        </Route>
      </Route>
    </Routes>
  );
};
