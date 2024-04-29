/** @format */

import { UseQueryOptions, UseQueryResult } from "react-query";
import { Axios } from "axios";
import { ErrorResponse } from "@/api";
import { TeamsListingDocument } from "../../contexts";

export type UseTeamsListingQueryParams = {
  page: number;
  limit: number;
  search: string;
  organizationId?: string;
};

export interface TeamsListingQueryParams extends UseTeamsListingQueryParams {
  protectedApi: Axios;
}

export type TeamsListingQueryData = {
  documents: Array<TeamsListingDocument>;
  total: number;
};

export type UseTeamsListingQueryOptions = UseQueryOptions<
  TeamsListingQueryData,
  ErrorResponse
>;

export type UseTeamsListingQueryResult = UseQueryResult<
  TeamsListingQueryData,
  ErrorResponse
>;

export type TeamsListingFilters = {
  organizationId?: string;
};
