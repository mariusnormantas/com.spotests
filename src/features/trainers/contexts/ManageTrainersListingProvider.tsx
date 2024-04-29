/** @format */

import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { useManageTrainersListingQuery } from "../services";
import {
  ManageTrainersListingProviderProps,
  ManageTrainersListingProviderReturn,
} from "./types";

// Creates a context to handle the data.
export const ManageTrainersListingContext =
  React.createContext<ManageTrainersListingProviderReturn>(
    {} as ManageTrainersListingProviderReturn
  );

export const ManageTrainersListingProvider: React.FC<
  ManageTrainersListingProviderProps
> = ({
  organizationId: controlledOrganizationId,
  teamId: controlledTeamId,
  children,
}) => {
  // Initializes component's states, hooks and etc.
  const { organizationId, teamId } = useParams();
  const [limit, setLimit] = React.useState(10);
  const [search, setSearch] = React.useState("");

  // Retrieves documents from database.
  const { data, isLoading, isFetching, isError, hasNextPage, fetchNextPage } =
    useManageTrainersListingQuery(
      {
        search,
        limit,
        organizationId: controlledOrganizationId ?? organizationId,
        teamId: controlledTeamId ?? teamId,
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
    <ManageTrainersListingContext.Provider
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
    </ManageTrainersListingContext.Provider>
  );
};
