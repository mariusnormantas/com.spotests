/** @format */

import { useQuery } from "react-query";
import { ErrorResponse } from "@/api";
import { useProtectedApi } from "@/features/auth";
import {
  UseTeamsListingQueryParams,
  TeamsListingQueryData,
  TeamsListingQueryParams,
  UseTeamsListingQueryOptions,
  UseTeamsListingQueryResult,
} from "./types";

/**
 * Function, which is used to send request.
 * @param params TeamsListingQueryParams
 * @returns Promise<TeamsListingQueryData>
 */
const queryFn = async (
  params: TeamsListingQueryParams
): Promise<TeamsListingQueryData> => {
  // Merges pagination with filters to append in query params.
  const searchParams = new URLSearchParams({
    page: params.page.toString(),
    limit: params.limit.toString(),
  });

  // Conditional query's params.
  params.search.length && searchParams.append("search", params.search);
  params.organizationId &&
    searchParams.append("organization", params.organizationId);

  // Retrieves data from server.
  const response = await params.protectedApi.get(
    `/api/team/v1/listing?${searchParams.toString()}`
  );
  return response.data;
};

export const useTeamsListingQuery = (
  params: UseTeamsListingQueryParams,
  options?: UseTeamsListingQueryOptions
): UseTeamsListingQueryResult => {
  // Initializes component's states, hooks and etc.
  const protectedApi = useProtectedApi();

  // Configure cache key.
  const { organizationId, ...rest } = params;
  const queryKey: Array<string | object> = ["teams-listing"];
  organizationId && queryKey.push(organizationId);
  queryKey.push(rest);

  return useQuery<TeamsListingQueryData, ErrorResponse>(
    queryKey,
    async () => await queryFn({ protectedApi, ...params }),
    options
  );
};
