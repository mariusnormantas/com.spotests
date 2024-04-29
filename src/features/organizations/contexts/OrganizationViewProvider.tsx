/** @format */

import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { useDashboardContext } from "@/features/dashboard";
import { useOrganizationViewQuery } from "../services";
import { OrganizationViewProviderReturn } from "./types";

// Creates a context to handle the data.
export const OrganizationViewContext =
  React.createContext<OrganizationViewProviderReturn>(
    {} as OrganizationViewProviderReturn
  );

export const OrganizationViewProvider: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const { view, updateView } = useDashboardContext();
  const { organizationId } = useParams();

  // Retrieves organization's data.
  const {
    data: organization,
    isLoading,
    isFetching,
  } = useOrganizationViewQuery(
    { organizationId: organizationId ?? "undefined" },
    { refetchOnWindowFocus: false }
  );

  // Layout effect, which handles dashboard's context which depends on view.
  React.useLayoutEffect(() => {
    if (
      !organization &&
      (isLoading || isFetching) &&
      !view.organization.loading
    ) {
      updateView("organization", { loading: true });
    } else if (organization && organization.name !== view.organization.name) {
      updateView("organization", { name: organization.name, loading: false });
    }
  }, [view, organization, isLoading, isFetching, updateView]);

  return (
    <OrganizationViewContext.Provider value={{ organization }}>
      <Outlet />
    </OrganizationViewContext.Provider>
  );
};
