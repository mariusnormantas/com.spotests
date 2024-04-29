/** @format */

import { Axios } from "axios";
import { Query, UseMutationOptions, UseMutationResult } from "react-query";
import { ErrorResponse } from "@/api";

export type CreateTeamMutationVariables = {
  name: string;
  description: string;
};

export type CreateTeamMutationData = {
  teamId: string;
  organizationId: string;
};

export type UseCreateTeamMutationParams = {
  organizationId?: string;
};

export interface CreateTeamMutationParams extends UseCreateTeamMutationParams {
  protectedApi: Axios;
}

export type UseCreateTeamMutationOptions = UseMutationOptions<
  CreateTeamMutationData,
  ErrorResponse,
  CreateTeamMutationVariables
>;
export type UseCreateTeamMutationResult = UseMutationResult<
  CreateTeamMutationData,
  ErrorResponse,
  CreateTeamMutationVariables
>;

export type CreateTeamInvalidateQueriesParams = {
  query: Query;
  data: CreateTeamMutationData;
  variables: CreateTeamMutationVariables;
};
