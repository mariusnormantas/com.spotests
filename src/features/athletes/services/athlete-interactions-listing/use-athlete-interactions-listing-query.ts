/** @format */

import { useQuery } from "react-query";
import { ErrorResponse } from "@/api";
import { useProtectedApi } from "@/features/auth";
import {
  UseAthleteInteractionsListingQueryParams,
  AthleteInteractionsListingQueryData,
  AthleteInteractionsListingQueryParams,
  UseAthleteInteractionsListingQueryOptions,
  UseAthleteInteractionsListingQueryResult,
} from "./types";

/**
 * Function, which is used to send request.
 * @param params AthleteInteractionsListingQueryParams
 * @returns Promise<AthleteInteractionsListingQueryData>
 */
const queryFn = async (
  params: AthleteInteractionsListingQueryParams
): Promise<AthleteInteractionsListingQueryData> => {
  const searchParams = new URLSearchParams({
    page: params.page.toString(),
    limit: params.limit.toString(),
  });
  const response = await params.protectedApi.get(
    `/api/athlete/v1/${
      params.athleteId
    }/interactions?${searchParams.toString()}`
  );
  return response.data;
};

export const useAthleteInteractionsListingQuery = (
  params: UseAthleteInteractionsListingQueryParams,
  options?: UseAthleteInteractionsListingQueryOptions
): UseAthleteInteractionsListingQueryResult => {
  // Initializes component's states, hooks and etc.
  const protectedApi = useProtectedApi();

  // Extracts parameters, to configure query's key.
  const { athleteId, ...rest } = params;
  return useQuery<AthleteInteractionsListingQueryData, ErrorResponse>(
    ["interactions-listing", athleteId, rest],
    async () => await queryFn({ protectedApi, ...params }),
    options
  );
};
