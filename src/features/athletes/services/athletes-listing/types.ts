/** @format */

import { UseQueryOptions, UseQueryResult } from "react-query";
import { Axios } from "axios";
import { ErrorResponse } from "@/api";
import { AthletesListingDocument } from "../../contexts";

export type UseAthletesListingQueryParams = {
  organizationId?: string;
  teamId?: string;
  page: number;
  limit: number;
  search: string;
};

export interface AthletesListingQueryParams
  extends UseAthletesListingQueryParams {
  protectedApi: Axios;
}

export type AthletesListingQueryData = {
  documents: Array<AthletesListingDocument>;
  total: number;
};

export type UseAthletesListingQueryOptions = UseQueryOptions<
  AthletesListingQueryData,
  ErrorResponse
>;

export type UseAthletesListingQueryResult = UseQueryResult<
  AthletesListingQueryData,
  ErrorResponse
>;
