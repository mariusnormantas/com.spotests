/** @format */

import { Axios } from "axios";
import { Query, UseMutationOptions, UseMutationResult } from "react-query";
import { ErrorResponse } from "@/api";

export type DeleteAthleteMutationVariables = object;

export type DeleteAthleteMutationData = {
  athleteId: string;
  organizationId: string;
  teams: Array<string>;
};

export type UseDeleteAthleteMutationParams = {
  athleteId: string;
};

export interface DeleteAthleteMutationParams
  extends UseDeleteAthleteMutationParams {
  protectedApi: Axios;
}

export type UseDeleteAthleteMutationOptions = UseMutationOptions<
  DeleteAthleteMutationData,
  ErrorResponse,
  DeleteAthleteMutationVariables
>;
export type UseDeleteAthleteMutationResult = UseMutationResult<
  DeleteAthleteMutationData,
  ErrorResponse,
  DeleteAthleteMutationVariables
>;

export type DeleteAthleteInvalidateQueriesParams = {
  query: Query;
  data: DeleteAthleteMutationData;
  variables: DeleteAthleteMutationVariables;
};

export type DeleteAthleteRemoveQueriesParams =
  DeleteAthleteInvalidateQueriesParams;
