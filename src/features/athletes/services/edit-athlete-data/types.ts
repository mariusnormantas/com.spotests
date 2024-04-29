/** @format */

import { Axios } from "axios";
import { Query, UseMutationOptions, UseMutationResult } from "react-query";
import { ErrorResponse } from "@/api";

export type EditAthleteDataMutationVariables = {
  birthDate: string;
  height: string;
  weight: string;
};

export type EditAthleteDataMutationData = {
  athleteId: string;
  organizationId: string;
};

export type UseEditAthleteDataMutationParams = {
  athleteId: string;
};

export interface EditAthleteDataMutationParams
  extends UseEditAthleteDataMutationParams {
  protectedApi: Axios;
}

export type UseEditAthleteDataMutationOptions = UseMutationOptions<
  EditAthleteDataMutationData,
  ErrorResponse,
  EditAthleteDataMutationVariables
>;
export type UseEditAthleteDataMutationResult = UseMutationResult<
  EditAthleteDataMutationData,
  ErrorResponse,
  EditAthleteDataMutationVariables
>;

export type EditAthleteDataInvalidateQueriesParams = {
  query: Query;
  data: EditAthleteDataMutationData;
  variables: EditAthleteDataMutationVariables;
};
