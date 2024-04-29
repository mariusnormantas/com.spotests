/** @format */

import { UseQueryOptions, UseQueryResult } from "react-query";
import { Axios } from "axios";
import { ErrorResponse } from "@/api";
import { TrainersListingDocument } from "../../contexts";

export type UseTrainersListingQueryParams = {
  page: number;
  limit: number;
  search: string;
  organizationId?: string;
  teamId?: string;
};

export interface TrainersListingQueryParams
  extends UseTrainersListingQueryParams {
  protectedApi: Axios;
}

export type TrainersListingQueryData = {
  documents: Array<TrainersListingDocument>;
  total: number;
};

export type UseTrainersListingQueryOptions = UseQueryOptions<
  TrainersListingQueryData,
  ErrorResponse
>;

export type UseTrainersListingQueryResult = UseQueryResult<
  TrainersListingQueryData,
  ErrorResponse
>;
