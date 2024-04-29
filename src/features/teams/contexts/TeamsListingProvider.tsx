/** @format */

import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { useTeamsListingQuery } from "../services";
import { TeamsListingProviderProps, TeamsListingProviderReturn } from "./types";

// Creates a context to handle the data.
export const TeamsListingContext =
  React.createContext<TeamsListingProviderReturn>(
    {} as TeamsListingProviderReturn
  );

export const TeamsListingProvider: React.FC<TeamsListingProviderProps> = ({
  organizationId: controlledOrganizationId,
  children,
}) => {
  // Initializes component's states, hooks and etc.
  const { organizationId } = useParams();
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(20);
  const [search, setSearch] = React.useState("");

  // Retrieves documents from database.
  const { data, isLoading, isFetching, isError } = useTeamsListingQuery(
    {
      page,
      limit,
      search,
      organizationId: controlledOrganizationId ?? organizationId,
    },
    { keepPreviousData: true, refetchOnWindowFocus: false }
  );

  // Memoized collection's documents.
  const documents = React.useMemo(() => data?.documents ?? [], [data]);

  // Memoized total count of collection's documents.
  const total = React.useMemo(() => data?.total ?? 0, [data]);

  return (
    <TeamsListingContext.Provider
      value={{
        documents,
        total,
        isLoading,
        isFetching,
        isError,
        page,
        setPage,
        limit,
        setLimit,
        search,
        setSearch,
      }}>
      {children ?? <Outlet />}
    </TeamsListingContext.Provider>
  );
};
