/** @format */

import { useQuery } from "react-query";
import { ErrorResponse } from "@/api";
import { useProtectedApi } from "@/features/auth";
import {
  UseTrainersListingQueryParams,
  TrainersListingQueryData,
  TrainersListingQueryParams,
  UseTrainersListingQueryOptions,
  UseTrainersListingQueryResult,
} from "./types";

/**
 * Function, which is used to send request.
 * @param params TrainersListingQueryParams
 * @returns Promise<TrainersListingQueryData>
 */
const queryFn = async (
  params: TrainersListingQueryParams
): Promise<TrainersListingQueryData> => {
  // Merges pagination with filters to append in query params.
  const searchParams = new URLSearchParams({
    page: params.page.toString(),
    limit: params.limit.toString(),
  });

  // Conditional query's params.
  params.search.length && searchParams.append("search", params.search);
  params.organizationId &&
    searchParams.append("organization", params.organizationId);
  params.teamId && searchParams.append("team", params.teamId);

  // Retrieves data from server.
  const response = await params.protectedApi.get(
    `/api/trainer/v1/listing?${searchParams.toString()}`
  );
  return response.data;
};

export const useTrainersListingQuery = (
  params: UseTrainersListingQueryParams,
  options?: UseTrainersListingQueryOptions
): UseTrainersListingQueryResult => {
  // Initializes component's states, hooks and etc.
  const protectedApi = useProtectedApi();

  // Configure cache key.
  const { organizationId, teamId, ...rest } = params;
  const queryKey: Array<string | object> = ["trainers-listing"];
  organizationId && queryKey.push(organizationId);
  teamId && queryKey.push(teamId);

  // The rest cache's keys.
  queryKey.push(rest);

  return useQuery<TrainersListingQueryData, ErrorResponse>(
    queryKey,
    async () => await queryFn({ protectedApi, ...params }),
    options
  );
};
