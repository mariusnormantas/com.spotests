/** @format */

import { useQuery } from "react-query";
import { ErrorResponse } from "@/api";
import { useProtectedApi } from "@/features/auth";
import {
  AthleteViewQueryParams,
  AthleteViewQueryData,
  UseAthleteViewQueryParams,
  UseAthleteViewQueryResult,
  UseAthleteViewQueryOptions,
} from "./types";

/**
 * Function, which is used to send request.
 * @params AthleteViewQueryParams
 * @returns Promise<AthleteViewQueryData>
 */
const queryFn = async (
  params: AthleteViewQueryParams
): Promise<AthleteViewQueryData> => {
  const response = await params.protectedApi.get(
    `/api/athlete/v1/${params.athleteId}/view`
  );
  return response.data;
};

export const useAthleteViewQuery = (
  params: UseAthleteViewQueryParams,
  options?: UseAthleteViewQueryOptions
): UseAthleteViewQueryResult => {
  // Initializes component's states, hooks and etc.
  const protectedApi = useProtectedApi();

  // Query's key for caching.
  const queryKey = ["athlete-view", params.athleteId];

  return useQuery<AthleteViewQueryData, ErrorResponse>(
    queryKey,
    async () => await queryFn({ protectedApi, ...params }),
    options
  );
};
