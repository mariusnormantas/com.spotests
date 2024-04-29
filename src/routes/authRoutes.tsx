/** @format */

import React from "react";
import { Route } from "react-router-dom";
import { AuthLayout } from "@/layouts";
import { LoginPage, ForgotPasswordPage, ResetPasswordPage } from "@/pages";
import { AuthRouteGuard } from "@/features/auth";

export const authRoutes = (
  <React.Fragment>
    <Route path="/login" element={<AuthRouteGuard type="guest" />}>
      <Route element={<AuthLayout title="Login to your account" />}>
        <Route index element={<LoginPage />} />
      </Route>
    </Route>
    <Route path="/reset" element={<AuthRouteGuard type="guest" />}>
      <Route element={<AuthLayout title="Reset your password" />}>
        <Route index element={<ForgotPasswordPage />} />
        <Route path=":token" element={<ResetPasswordPage />} />
      </Route>
    </Route>
  </React.Fragment>
);
