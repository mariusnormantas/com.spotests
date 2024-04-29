/** @format */

import { useQuery } from "react-query";
import { ErrorResponse } from "@/api";
import { useProtectedApi } from "@/features/auth";
import {
  TrainerViewQueryParams,
  TrainerViewQueryData,
  UseTrainerViewQueryParams,
  UseTrainerViewQueryResult,
  UseTrainerViewQueryOptions,
} from "./types";

/**
 * Function, which is used to send request.
 * @params TrainerViewQueryParams
 * @returns Promise<TrainerViewQueryData>
 */
const queryFn = async (
  params: TrainerViewQueryParams
): Promise<TrainerViewQueryData> => {
  const response = await params.protectedApi.get(
    `/api/trainer/v1/${params.trainerId}/view`
  );
  return response.data;
};

export const useTrainerViewQuery = (
  params: UseTrainerViewQueryParams,
  options?: UseTrainerViewQueryOptions
): UseTrainerViewQueryResult => {
  // Initializes component's states, hooks and etc.
  const protectedApi = useProtectedApi();

  // Query's key for caching.
  const queryKey = ["trainer-view", params.trainerId];

  return useQuery<TrainerViewQueryData, ErrorResponse>(
    queryKey,
    async () => await queryFn({ protectedApi, ...params }),
    options
  );
};
