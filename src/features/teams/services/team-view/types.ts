/** @format */

import { UseQueryOptions, UseQueryResult } from "react-query";
import { Axios } from "axios";
import { ErrorResponse } from "@/api";
import { TeamViewDocument } from "../../contexts";

export type UseTeamViewQueryParams = {
  teamId: string;
};

export interface TeamViewQueryParams extends UseTeamViewQueryParams {
  protectedApi: Axios;
}

export type TeamViewQueryData = TeamViewDocument;

export type UseTeamViewQueryOptions = UseQueryOptions<
  TeamViewQueryData,
  ErrorResponse
>;

export type UseTeamViewQueryResult = UseQueryResult<
  TeamViewQueryData,
  ErrorResponse
>;
