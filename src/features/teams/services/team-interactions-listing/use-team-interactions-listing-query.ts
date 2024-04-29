/** @format */

import { useQuery } from "react-query";
import { ErrorResponse } from "@/api";
import { useProtectedApi } from "@/features/auth";
import {
  UseTeamInteractionsListingQueryParams,
  TeamInteractionsListingQueryData,
  TeamInteractionsListingQueryParams,
  UseTeamInteractionsListingQueryOptions,
  UseTeamInteractionsListingQueryResult,
} from "./types";

/**
 * Function, which is used to send request.
 * @param params TeamInteractionsListingQueryParams
 * @returns Promise<TeamInteractionsListingQueryData>
 */
const queryFn = async (
  params: TeamInteractionsListingQueryParams
): Promise<TeamInteractionsListingQueryData> => {
  const searchParams = new URLSearchParams({
    page: params.page.toString(),
    limit: params.limit.toString(),
  });
  const response = await params.protectedApi.get(
    `/api/team/v1/${params.teamId}/interactions?${searchParams.toString()}`
  );
  return response.data;
};

export const useTeamInteractionsListingQuery = (
  params: UseTeamInteractionsListingQueryParams,
  options?: UseTeamInteractionsListingQueryOptions
): UseTeamInteractionsListingQueryResult => {
  // Initializes component's states, hooks and etc.
  const protectedApi = useProtectedApi();

  // Extracts parameters, to configure query's key.
  const { teamId, ...rest } = params;
  return useQuery<TeamInteractionsListingQueryData, ErrorResponse>(
    ["interactions-listing", teamId, rest],
    async () => await queryFn({ protectedApi, ...params }),
    options
  );
};
