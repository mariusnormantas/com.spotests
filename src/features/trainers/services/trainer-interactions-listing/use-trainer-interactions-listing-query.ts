/** @format */

import { useQuery } from "react-query";
import { ErrorResponse } from "@/api";
import { useProtectedApi } from "@/features/auth";
import {
  UseTrainerInteractionsListingQueryParams,
  TrainerInteractionsListingQueryData,
  TrainerInteractionsListingQueryParams,
  UseTrainerInteractionsListingQueryOptions,
  UseTrainerInteractionsListingQueryResult,
} from "./types";

/**
 * Function, which is used to send request.
 * @param params TrainerInteractionsListingQueryParams
 * @returns Promise<TrainerInteractionsListingQueryData>
 */
const queryFn = async (
  params: TrainerInteractionsListingQueryParams
): Promise<TrainerInteractionsListingQueryData> => {
  const searchParams = new URLSearchParams({
    page: params.page.toString(),
    limit: params.limit.toString(),
  });
  const response = await params.protectedApi.get(
    `/api/trainer/v1/${
      params.trainerId
    }/interactions?${searchParams.toString()}`
  );
  return response.data;
};

export const useTrainerInteractionsListingQuery = (
  params: UseTrainerInteractionsListingQueryParams,
  options?: UseTrainerInteractionsListingQueryOptions
): UseTrainerInteractionsListingQueryResult => {
  // Initializes component's states, hooks and etc.
  const protectedApi = useProtectedApi();

  // Extracts parameters, to configure query's key.
  const { trainerId, ...rest } = params;
  return useQuery<TrainerInteractionsListingQueryData, ErrorResponse>(
    ["interactions-listing", trainerId, rest],
    async () => await queryFn({ protectedApi, ...params }),
    options
  );
};
