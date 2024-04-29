/** @format */

import React from "react";
import { useAthleteInteractionsListingQuery } from "../services";
import {
  AthleteInteractionsListingProviderProps,
  AthleteInteractionsListingProviderReturn,
} from "./types";

// Creates a context to handle the data.
export const AthleteInteractionsListingContext =
  React.createContext<AthleteInteractionsListingProviderReturn>(
    {} as AthleteInteractionsListingProviderReturn
  );

export const AthleteInteractionsListingProvider: React.FC<
  AthleteInteractionsListingProviderProps
> = ({ athleteId, children }) => {
  // Listing variables.
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(20);

  // Retrieves documents from database.
  const { data, isLoading, isFetching, isError } =
    useAthleteInteractionsListingQuery(
      { athleteId, page, limit },
      { keepPreviousData: true, refetchOnWindowFocus: false }
    );

  // Memoized collection's documents.
  const documents = React.useMemo(() => data?.documents ?? [], [data]);

  // Memoized total count of collection's documents.
  const total = React.useMemo(() => data?.total ?? 0, [data]);

  return (
    <AthleteInteractionsListingContext.Provider
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
    </AthleteInteractionsListingContext.Provider>
  );
};
