/** @format */

import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { useTrainersListingQuery } from "../services";
import {
  TrainersListingProviderProps,
  TrainersListingProviderReturn,
} from "./types";

// Creates a context to handle the data.
export const TrainersListingContext =
  React.createContext<TrainersListingProviderReturn>(
    {} as TrainersListingProviderReturn
  );

export const TrainersListingProvider: React.FC<
  TrainersListingProviderProps
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
  const { data, isLoading, isFetching, isError } = useTrainersListingQuery(
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
    <TrainersListingContext.Provider
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
    </TrainersListingContext.Provider>
  );
};
