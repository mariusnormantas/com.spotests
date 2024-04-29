/** @format */

import { Route } from "react-router-dom";
import { PublicLayout } from "@/layouts";
import { WelcomePage } from "@/pages";

export const publicRoutes = (
  <Route path="/" element={<PublicLayout />}>
    <Route index element={<WelcomePage />} />
  </Route>
);
