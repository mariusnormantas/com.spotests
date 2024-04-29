/** @format */

import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { useAthletesListingQuery } from "../services";
import {
  AthletesListingProviderProps,
  AthletesListingProviderReturn,
} from "./types";

// Creates a context to handle the data.
export const AthletesListingContext =
  React.createContext<AthletesListingProviderReturn>(
    {} as AthletesListingProviderReturn
  );

export const AthletesListingProvider: React.FC<
  AthletesListingProviderProps
> = ({
  organizationId: controlledOrganizationId,
  teamId: controlledTeamId,
  children,
}) => {
  // Initializes component's states, hooks and etc.
  const { organizationId, teamId } = useParams();
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(20);
  const [search, setSearch] = React.useState("");

  // Retrieves documents from database.
  const { data, isLoading, isFetching, isError } = useAthletesListingQuery(
    {
      page,
      limit,
      search,
      organizationId: controlledOrganizationId ?? organizationId,
      teamId: controlledTeamId ?? teamId,
    },
    { keepPreviousData: true, refetchOnWindowFocus: false }
  );

  // Memoized collection's documents.
  const documents = React.useMemo(() => data?.documents ?? [], [data]);

  // Memoized total count of collection's documents.
  const total = React.useMemo(() => data?.total ?? 0, [data]);

  return (
    <AthletesListingContext.Provider
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
    </AthletesListingContext.Provider>
  );
};
