/** @format */

import { UseQueryOptions, UseQueryResult } from "react-query";
import { Axios } from "axios";
import { ErrorResponse } from "@/api";
import { TeamInteractionsListingDocument } from "../../contexts";

export type UseTeamInteractionsListingQueryParams = {
  teamId: string;
  page: number;
  limit: number;
};

export interface TeamInteractionsListingQueryParams
  extends UseTeamInteractionsListingQueryParams {
  protectedApi: Axios;
}

export type TeamInteractionsListingQueryData = {
  documents: Array<TeamInteractionsListingDocument>;
  total: number;
};

export type UseTeamInteractionsListingQueryOptions = UseQueryOptions<
  TeamInteractionsListingQueryData,
  ErrorResponse
>;

export type UseTeamInteractionsListingQueryResult = UseQueryResult<
  TeamInteractionsListingQueryData,
  ErrorResponse
>;
