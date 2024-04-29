/** @format */

import { UseQueryOptions, UseQueryResult } from "react-query";
import { Axios } from "axios";
import { ErrorResponse } from "@/api";
import { AthleteViewDocument } from "../../contexts";

export type UseAthleteViewQueryParams = {
  athleteId: string;
};

export interface AthleteViewQueryParams extends UseAthleteViewQueryParams {
  protectedApi: Axios;
}

export type AthleteViewQueryData = AthleteViewDocument;

export type UseAthleteViewQueryOptions = UseQueryOptions<
  AthleteViewQueryData,
  ErrorResponse
>;

export type UseAthleteViewQueryResult = UseQueryResult<
  AthleteViewQueryData,
  ErrorResponse
>;
