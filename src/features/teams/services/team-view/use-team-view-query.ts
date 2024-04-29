/** @format */

import { useQuery } from "react-query";
import { ErrorResponse } from "@/api";
import { useProtectedApi } from "@/features/auth";
import {
  TeamViewQueryParams,
  TeamViewQueryData,
  UseTeamViewQueryParams,
  UseTeamViewQueryResult,
  UseTeamViewQueryOptions,
} from "./types";

/**
 * Function, which is used to send request.
 * @params TeamViewQueryParams
 * @returns Promise<TeamViewQueryData>
 */
const queryFn = async (
  params: TeamViewQueryParams
): Promise<TeamViewQueryData> => {
  const response = await params.protectedApi.get(
    `/api/team/v1/${params.teamId}/view`
  );
  return response.data;
};

export const useTeamViewQuery = (
  params: UseTeamViewQueryParams,
  options?: UseTeamViewQueryOptions
): UseTeamViewQueryResult => {
  // Initializes component's states, hooks and etc.
  const protectedApi = useProtectedApi();

  // Query's key for caching.
  const queryKey = ["team-view", params.teamId];

  return useQuery<TeamViewQueryData, ErrorResponse>(
    queryKey,
    async () => await queryFn({ protectedApi, ...params }),
    options
  );
};
