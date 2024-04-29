/** @format */

import { useInfiniteQuery } from "react-query";
import { ErrorResponse } from "@/api";
import { useProtectedApi } from "@/features/auth";
import {
  UseManageTrainersListingQueryParams,
  ManageTrainersListingQueryData,
  ManageTrainersListingQueryParams,
  UseManageTrainersListingQueryOptions,
  UseManageTrainersListingQueryResult,
} from "./types";

/**
 * Function, which is used to send request.
 * @param params ManageTrainersListingQueryParams
 * @returns Promise<ManageTrainersListingQueryData>
 */
const queryFn = async ({
  pageParam,
  ...params
}: ManageTrainersListingQueryParams): Promise<ManageTrainersListingQueryData> => {
  // Merges pagination with filters to append in query params.
  const searchParams = new URLSearchParams({
    page: pageParam.toString(),
    limit: params.limit.toString(),
  });

  // Conditional query's params.
  params.search.length && searchParams.append("search", params.search);
  params.organizationId &&
    searchParams.append("organization", params.organizationId);
  params.teamId && searchParams.append("team", params.teamId);

  // Retrieves data from server.
  const response = await params.protectedApi.get(
    `/api/trainer/v1/management-listing?${searchParams.toString()}`
  );
  return response.data;
};

export const useManageTrainersListingQuery = (
  params: UseManageTrainersListingQueryParams,
  options?: UseManageTrainersListingQueryOptions
): UseManageTrainersListingQueryResult => {
  // Initializes component's states, hooks and etc.
  const protectedApi = useProtectedApi();

  // Configure cache key.
  const { organizationId, teamId, ...rest } = params;
  const queryKey: Array<string | object> = ["manage-trainers-listing"];
  organizationId && queryKey.push(organizationId);
  teamId && queryKey.push(teamId);

  // The rest cache's keys.
  queryKey.push(rest);

  return useInfiniteQuery<ManageTrainersListingQueryData, ErrorResponse>({
    queryKey,
    queryFn: async ({ pageParam = 1 }) =>
      await queryFn({ protectedApi, ...params, pageParam }),
    getNextPageParam: (lastPageData, allPagesData) => {
      if (allPagesData.length * params.limit < lastPageData.total) {
        return allPagesData.length + 1;
      }
      return undefined;
    },
    ...options,
  });
};
