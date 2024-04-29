/** @format */

import { Axios } from "axios";
import { Query, UseMutationOptions, UseMutationResult } from "react-query";
import { ErrorResponse } from "@/api";

export type EditAthleteAccountMutationVariables = {
  name: string;
  email: string;
};

export type EditAthleteAccountMutationData = {
  athleteId: string;
  organizationId: string;
  teams: Array<string>;
};

export type UseEditAthleteAccountMutationParams = {
  athleteId: string;
};

export interface EditAthleteAccountMutationParams
  extends UseEditAthleteAccountMutationParams {
  protectedApi: Axios;
}

export type UseEditAthleteAccountMutationOptions = UseMutationOptions<
  EditAthleteAccountMutationData,
  ErrorResponse,
  EditAthleteAccountMutationVariables
>;
export type UseEditAthleteAccountMutationResult = UseMutationResult<
  EditAthleteAccountMutationData,
  ErrorResponse,
  EditAthleteAccountMutationVariables
>;

export type EditAthleteAccountInvalidateQueriesParams = {
  query: Query;
  data: EditAthleteAccountMutationData;
  variables: EditAthleteAccountMutationVariables;
};
