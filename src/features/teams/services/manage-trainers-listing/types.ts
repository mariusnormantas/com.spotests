/** @format */

import { UseInfiniteQueryOptions, UseInfiniteQueryResult } from "react-query";
import { Axios } from "axios";
import { ErrorResponse } from "@/api";
import { ManageTrainersListingDocument } from "../../contexts";

export type UseManageTrainersListingQueryParams = {
  limit: number;
  search: string;
  teamId: string;
};

export interface ManageTrainersListingQueryParams
  extends UseManageTrainersListingQueryParams {
  protectedApi: Axios;
  pageParam: number;
}

export type ManageTrainersListingQueryData = {
  documents: Array<ManageTrainersListingDocument>;
  selected: Array<ManageTrainersListingDocument>;
  total: number;
};

export type UseManageTrainersListingQueryOptions = UseInfiniteQueryOptions<
  ManageTrainersListingQueryData,
  ErrorResponse
>;

export type UseManageTrainersListingQueryResult = UseInfiniteQueryResult<
  ManageTrainersListingQueryData,
  ErrorResponse
>;
