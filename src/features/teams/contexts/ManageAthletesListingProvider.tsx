/** @format */

import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { useManageAthletesListingQuery } from "../services";
import {
  ManageAthletesListingProviderProps,
  ManageAthletesListingProviderReturn,
} from "./types";

// Creates a context to handle the data.
export const ManageAthletesListingContext =
  React.createContext<ManageAthletesListingProviderReturn>(
    {} as ManageAthletesListingProviderReturn
  );

export const ManageAthletesListingProvider: React.FC<
  ManageAthletesListingProviderProps
> = ({ teamId: controlledTeamId, children }) => {
  // Initializes component's states, hooks and etc.
  const params = useParams();
  const [limit, setLimit] = React.useState(10);
  const [search, setSearch] = React.useState("");

  // Retrieves documents from database.
  const { data, isLoading, isFetching, isError, hasNextPage, fetchNextPage } =
    useManageAthletesListingQuery(
      {
        search,
        limit,
        teamId: controlledTeamId ?? params.teamId ?? "undefined",
      },
      {
        refetchOnWindowFocus: false,
      }
    );

  // Memoized collection's documents.
  const documents = React.useMemo(() => {
    if (data && data.pages) {
      return data.pages.flatMap((group) => group.documents);
    }
    return [];
  }, [data]);

  // Memoized selected documents, which updates only on initial fetch.
  const initialSelected = React.useMemo(() => {
    if (data && data.pages[0]) {
      return data.pages[0].selected;
    }
    return [];
  }, [data]);

  return (
    <ManageAthletesListingContext.Provider
      value={{
        documents,
        initialSelected,
        isLoading,
        isFetching,
        isError,
        hasNextPage,
        fetchNextPage,
        limit,
        setLimit,
        search,
        setSearch,
      }}>
      {children ?? <Outlet />}
    </ManageAthletesListingContext.Provider>
  );
};
