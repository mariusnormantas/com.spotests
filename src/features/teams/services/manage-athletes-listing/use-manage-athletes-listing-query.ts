/** @format */

import { useInfiniteQuery } from "react-query";
import { ErrorResponse } from "@/api";
import { useProtectedApi } from "@/features/auth";
import {
  UseManageAthletesListingQueryParams,
  ManageAthletesListingQueryData,
  ManageAthletesListingQueryParams,
  UseManageAthletesListingQueryOptions,
  UseManageAthletesListingQueryResult,
} from "./types";

/**
 * Function, which is used to send request.
 * @param params ManageAthletesListingQueryParams
 * @returns Promise<ManageAthletesListingQueryData>
 */
const queryFn = async ({
  pageParam,
  ...params
}: ManageAthletesListingQueryParams): Promise<ManageAthletesListingQueryData> => {
  // Merges pagination with filters to append in query params.
  const searchParams = new URLSearchParams({
    page: pageParam.toString(),
    limit: params.limit.toString(),
  });

  // Conditional query's params.
  params.search.length && searchParams.append("search", params.search);

  // Retrieves data from server.
  const response = await params.protectedApi.get(
    `/api/team/v1/${
      params.teamId
    }/manage-athletes-listing?${searchParams.toString()}`
  );
  return response.data;
};

export const useManageAthletesListingQuery = (
  params: UseManageAthletesListingQueryParams,
  options?: UseManageAthletesListingQueryOptions
): UseManageAthletesListingQueryResult => {
  // Initializes component's states, hooks and etc.
  const protectedApi = useProtectedApi();

  // Configure cache key.
  const { teamId, ...rest } = params;
  const queryKey: Array<string | object> = ["manage-athletes-listing", teamId];

  // The rest cache's keys.
  queryKey.push(rest);

  return useInfiniteQuery<ManageAthletesListingQueryData, ErrorResponse>({
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
