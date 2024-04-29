/** @format */

import { UseInfiniteQueryOptions, UseInfiniteQueryResult } from "react-query";
import { Axios } from "axios";
import { ErrorResponse } from "@/api";
import { ManageAthletesListingDocument } from "../../contexts";

export type UseManageAthletesListingQueryParams = {
  limit: number;
  search: string;
  teamId: string;
};

export interface ManageAthletesListingQueryParams
  extends UseManageAthletesListingQueryParams {
  protectedApi: Axios;
  pageParam: number;
}

export type ManageAthletesListingQueryData = {
  documents: Array<ManageAthletesListingDocument>;
  selected: Array<ManageAthletesListingDocument>;
  total: number;
};

export type UseManageAthletesListingQueryOptions = UseInfiniteQueryOptions<
  ManageAthletesListingQueryData,
  ErrorResponse
>;

export type UseManageAthletesListingQueryResult = UseInfiniteQueryResult<
  ManageAthletesListingQueryData,
  ErrorResponse
>;
