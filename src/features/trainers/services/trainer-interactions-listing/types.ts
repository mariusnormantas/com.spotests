/** @format */

import { UseQueryOptions, UseQueryResult } from "react-query";
import { Axios } from "axios";
import { ErrorResponse } from "@/api";
import { TrainerInteractionsListingDocument } from "../../contexts";

export type UseTrainerInteractionsListingQueryParams = {
  trainerId: string;
  page: number;
  limit: number;
};

export interface TrainerInteractionsListingQueryParams
  extends UseTrainerInteractionsListingQueryParams {
  protectedApi: Axios;
}

export type TrainerInteractionsListingQueryData = {
  documents: Array<TrainerInteractionsListingDocument>;
  total: number;
};

export type UseTrainerInteractionsListingQueryOptions = UseQueryOptions<
  TrainerInteractionsListingQueryData,
  ErrorResponse
>;

export type UseTrainerInteractionsListingQueryResult = UseQueryResult<
  TrainerInteractionsListingQueryData,
  ErrorResponse
>;
