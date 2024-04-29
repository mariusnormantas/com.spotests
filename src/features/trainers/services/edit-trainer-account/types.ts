/** @format */

import { Axios } from "axios";
import { Query, UseMutationOptions, UseMutationResult } from "react-query";
import { ErrorResponse } from "@/api";

export type EditTrainerAccountMutationVariables = {
  name: string;
  email: string;
};

export type EditTrainerAccountMutationData = {
  trainerId: string;
  organizationId: string;
};

export type UseEditTrainerAccountMutationParams = {
  trainerId: string;
  organizationId: string;
};

export interface EditTrainerAccountMutationParams
  extends UseEditTrainerAccountMutationParams {
  protectedApi: Axios;
}

export type UseEditTrainerAccountMutationOptions = UseMutationOptions<
  EditTrainerAccountMutationData,
  ErrorResponse,
  EditTrainerAccountMutationVariables
>;
export type UseEditTrainerAccountMutationResult = UseMutationResult<
  EditTrainerAccountMutationData,
  ErrorResponse,
  EditTrainerAccountMutationVariables
>;

export type EditTrainerAccountInvalidateQueriesParams = {
  query: Query;
  data: EditTrainerAccountMutationData;
  variables: EditTrainerAccountMutationVariables;
};
