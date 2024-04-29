/** @format */

import React from "react";
import { useTeamInteractionsListingQuery } from "../services";
import {
  TeamInteractionsListingProviderProps,
  TeamInteractionsListingProviderReturn,
} from "./types";

// Creates a context to handle the data.
export const TeamInteractionsListingContext =
  React.createContext<TeamInteractionsListingProviderReturn>(
    {} as TeamInteractionsListingProviderReturn
  );

export const TeamInteractionsListingProvider: React.FC<
  TeamInteractionsListingProviderProps
> = ({ teamId, children }) => {
  // Listing variables.
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(20);

  // Retrieves documents from database.
  const { data, isLoading, isFetching, isError } =
    useTeamInteractionsListingQuery(
      { teamId, page, limit },
      { keepPreviousData: true, refetchOnWindowFocus: false }
    );

  // Memoized collection's documents.
  const documents = React.useMemo(() => data?.documents ?? [], [data]);

  // Memoized total count of collection's documents.
  const total = React.useMemo(() => data?.total ?? 0, [data]);

  return (
    <TeamInteractionsListingContext.Provider
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
      }}>
      {children}
    </TeamInteractionsListingContext.Provider>
  );
};
