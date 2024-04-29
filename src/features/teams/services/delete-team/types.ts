/** @format */

import { Axios } from "axios";
import { Query, UseMutationOptions, UseMutationResult } from "react-query";
import { ErrorResponse } from "@/api";

export type DeleteTeamMutationVariables = object;

export type DeleteTeamMutationData = {
  teamId: string;
  organizationId: string;
};

export type UseDeleteTeamMutationParams = {
  teamId: string;
  organizationId: string;
};

export interface DeleteTeamMutationParams extends UseDeleteTeamMutationParams {
  protectedApi: Axios;
}

export type UseDeleteTeamMutationOptions = UseMutationOptions<
  DeleteTeamMutationData,
  ErrorResponse,
  DeleteTeamMutationVariables
>;
export type UseDeleteTeamMutationResult = UseMutationResult<
  DeleteTeamMutationData,
  ErrorResponse,
  DeleteTeamMutationVariables
>;

export type DeleteTeamInvalidateQueriesParams = {
  query: Query;
  data: DeleteTeamMutationData;
  variables: DeleteTeamMutationVariables;
};

export type DeleteTeamRemoveQueriesParams = DeleteTeamInvalidateQueriesParams;
