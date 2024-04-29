/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import { UseDashboardLinksReturn } from "./types";

export const useDashboardLinks = (): UseDashboardLinksReturn => {
  // Initializes component's states, hooks and etc.
  const params = useParams();

  // Memoized links based on app.
  const app = React.useMemo(() => `/dashboard/app`, []);

  // Memoized links based on organizations.
  const organizations = React.useMemo(() => `/dashboard/organizations`, []);

  // Memoized links based on teams.
  const teams = React.useMemo(
    () =>
      params.organizationId
        ? `/dashboard/organizations/${params.organizationId}/teams`
        : `/dashboard/teams`,
    [params.organizationId]
  );

  // Memoized links based on trainers.
  const trainers = React.useMemo(
    () =>
      params.organizationId
        ? params.teamId
          ? `/dashboard/organizations/${params.organizationId}/teams/${params.teamId}/trainers`
          : `/dashboard/organizations/${params.organizationId}/trainers`
        : params.teamId
        ? `/dashboard/teams/${params.teamId}/trainers`
        : `/dashboard/trainers`,
    [params.organizationId, params.teamId]
  );

  // Memoized links based on athletes.
  const athletes = React.useMemo(
    () =>
      params.organizationId
        ? params.teamId
          ? `/dashboard/organizations/${params.organizationId}/teams/${params.teamId}/athletes`
          : `/dashboard/organizations/${params.organizationId}/athletes`
        : params.teamId
        ? `/dashboard/teams/${params.teamId}/athletes`
        : `/dashboard/athletes`,
    [params.organizationId, params.teamId]
  );

  // Return an array of link objects based on the current route.
  return {
    app,
    organizations,
    teams,
    trainers,
    athletes,
  };
};
