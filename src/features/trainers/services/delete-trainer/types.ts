/** @format */

import { Axios } from "axios";
import { Query, UseMutationOptions, UseMutationResult } from "react-query";
import { ErrorResponse } from "@/api";

export type DeleteTrainerMutationVariables = object;

export type DeleteTrainerMutationData = {
  trainerId: string;
  organizationId: string;
};

export type UseDeleteTrainerMutationParams = {
  trainerId: string;
  organizationId: string;
};

export interface DeleteTrainerMutationParams
  extends UseDeleteTrainerMutationParams {
  protectedApi: Axios;
}

export type UseDeleteTrainerMutationOptions = UseMutationOptions<
  DeleteTrainerMutationData,
  ErrorResponse,
  DeleteTrainerMutationVariables
>;
export type UseDeleteTrainerMutationResult = UseMutationResult<
  DeleteTrainerMutationData,
  ErrorResponse,
  DeleteTrainerMutationVariables
>;

export type DeleteTrainerInvalidateQueriesParams = {
  query: Query;
  data: DeleteTrainerMutationData;
  variables: DeleteTrainerMutationVariables;
};

export type DeleteTrainerRemoveQueriesParams =
  DeleteTrainerInvalidateQueriesParams;
