/** @format */

import React from "react";
import { useOrganizationInteractionsListingQuery } from "../services";
import {
  OrganizationInteractionsListingProviderProps,
  OrganizationInteractionsListingProviderReturn,
} from "./types";

// Creates a context to handle the data.
export const OrganizationInteractionsListingContext =
  React.createContext<OrganizationInteractionsListingProviderReturn>(
    {} as OrganizationInteractionsListingProviderReturn
  );

export const OrganizationInteractionsListingProvider: React.FC<
  OrganizationInteractionsListingProviderProps
> = ({ organizationId, children }) => {
  // Listing variables.
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(20);

  // Retrieves documents from database.
  const { data, isLoading, isFetching, isError } =
    useOrganizationInteractionsListingQuery(
      { organizationId, page, limit },
      { keepPreviousData: true, refetchOnWindowFocus: false }
    );

  // Memoized collection's documents.
  const documents = React.useMemo(() => data?.documents ?? [], [data]);

  // Memoized total count of collection's documents.
  const total = React.useMemo(() => data?.total ?? 0, [data]);

  return (
    <OrganizationInteractionsListingContext.Provider
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
    </OrganizationInteractionsListingContext.Provider>
  );
};
