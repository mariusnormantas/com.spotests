/** @format */

import React from "react";
import { useTrainerInteractionsListingQuery } from "../services";
import {
  TrainerInteractionsListingProviderProps,
  TrainerInteractionsListingProviderReturn,
} from "./types";

// Creates a context to handle the data.
export const TrainerInteractionsListingContext =
  React.createContext<TrainerInteractionsListingProviderReturn>(
    {} as TrainerInteractionsListingProviderReturn
  );

export const TrainerInteractionsListingProvider: React.FC<
  TrainerInteractionsListingProviderProps
> = ({ trainerId, children }) => {
  // Listing variables.
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(20);

  // Retrieves documents from database.
  const { data, isLoading, isFetching, isError } =
    useTrainerInteractionsListingQuery(
      { trainerId, page, limit },
      { keepPreviousData: true, refetchOnWindowFocus: false }
    );

  // Memoized collection's documents.
  const documents = React.useMemo(() => data?.documents ?? [], [data]);

  // Memoized total count of collection's documents.
  const total = React.useMemo(() => data?.total ?? 0, [data]);

  return (
    <TrainerInteractionsListingContext.Provider
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
    </TrainerInteractionsListingContext.Provider>
  );
};
