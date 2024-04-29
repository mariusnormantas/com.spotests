/** @format */

import { UseQueryOptions, UseQueryResult } from "react-query";
import { Axios } from "axios";
import { ErrorResponse } from "@/api";
import { TrainerViewDocument } from "../../contexts";

export type UseTrainerViewQueryParams = {
  trainerId: string;
};

export interface TrainerViewQueryParams extends UseTrainerViewQueryParams {
  protectedApi: Axios;
}

export type TrainerViewQueryData = TrainerViewDocument;

export type UseTrainerViewQueryOptions = UseQueryOptions<
  TrainerViewQueryData,
  ErrorResponse
>;

export type UseTrainerViewQueryResult = UseQueryResult<
  TrainerViewQueryData,
  ErrorResponse
>;
