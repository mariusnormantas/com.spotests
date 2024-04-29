/** @format */

import { Axios } from "axios";
import { Query, UseMutationOptions, UseMutationResult } from "react-query";
import { ErrorResponse } from "@/api";

export type CreateTrainerMutationVariables = {
  name: string;
  email: string;
};

export type CreateTrainerMutationData = {
  trainerId: string;
  organizationId: string;
};

export type UseCreateTrainerMutationParams = {
  organizationId?: string;
};

export interface CreateTrainerMutationParams
  extends UseCreateTrainerMutationParams {
  protectedApi: Axios;
}

export type UseCreateTrainerMutationOptions = UseMutationOptions<
  CreateTrainerMutationData,
  ErrorResponse,
  CreateTrainerMutationVariables
>;
export type UseCreateTrainerMutationResult = UseMutationResult<
  CreateTrainerMutationData,
  ErrorResponse,
  CreateTrainerMutationVariables
>;

export type CreateTrainerInvalidateQueriesParams = {
  query: Query;
  data: CreateTrainerMutationData;
  variables: CreateTrainerMutationVariables;
};
