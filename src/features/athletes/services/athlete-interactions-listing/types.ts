/** @format */

import { UseQueryOptions, UseQueryResult } from "react-query";
import { Axios } from "axios";
import { ErrorResponse } from "@/api";
import { AthleteInteractionsListingDocument } from "../../contexts";

export type UseAthleteInteractionsListingQueryParams = {
  athleteId: string;
  page: number;
  limit: number;
};

export interface AthleteInteractionsListingQueryParams
  extends UseAthleteInteractionsListingQueryParams {
  protectedApi: Axios;
}

export type AthleteInteractionsListingQueryData = {
  documents: Array<AthleteInteractionsListingDocument>;
  total: number;
};

export type UseAthleteInteractionsListingQueryOptions = UseQueryOptions<
  AthleteInteractionsListingQueryData,
  ErrorResponse
>;

export type UseAthleteInteractionsListingQueryResult = UseQueryResult<
  AthleteInteractionsListingQueryData,
  ErrorResponse
>;
