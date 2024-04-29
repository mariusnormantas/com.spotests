/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import { useOrganizationsListingQuery } from "../services";
import {
  OrganizationsListingProviderProps,
  OrganizationsListingProviderReturn,
} from "./types";

// Creates a context to handle the data.
export const OrganizationsListingContext =
  React.createContext<OrganizationsListingProviderReturn>(
    {} as OrganizationsListingProviderReturn
  );

export const OrganizationsListingProvider: React.FC<
  OrganizationsListingProviderProps
> = ({ children }) => {
  // Initializes component's states, hooks and etc.
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(20);
  const [search, setSearch] = React.useState("");

  // Retrieves documents from database.
  const { data, isLoading, isFetching } = useOrganizationsListingQuery(
    { page, limit, search },
    { keepPreviousData: true, refetchOnWindowFocus: false }
  );

  // Memoized documents, when query's data exists or empty array.
  const documents = React.useMemo(() => {
    if (data) {
      return data.documents;
    }
    return [];
  }, [data]);

  // Memoized total count of documents.
  const total = React.useMemo(() => {
    if (data) {
      return data.total;
    }
    return 0;
  }, [data]);

  return (
    <OrganizationsListingContext.Provider
      value={{
        documents,
        total,
        page,
        setPage,
        limit,
        setLimit,
        search,
        setSearch,
        isLoading,
        isFetching,
      }}>
      {children ?? <Outlet />}
    </OrganizationsListingContext.Provider>
  );
};
