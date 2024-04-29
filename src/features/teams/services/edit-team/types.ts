/** @format */

import { Axios } from "axios";
import { Query, UseMutationOptions, UseMutationResult } from "react-query";
import { ErrorResponse } from "@/api";

export type EditTeamMutationVariables = {
  name: string;
  description: string;
};

export type EditTeamMutationData = {
  teamId: string;
  organizationId: string;
};

export type UseEditTeamMutationParams = {
  teamId: string;
  organizationId: string;
};

export interface EditTeamMutationParams extends UseEditTeamMutationParams {
  protectedApi: Axios;
}

export type UseEditTeamMutationOptions = UseMutationOptions<
  EditTeamMutationData,
  ErrorResponse,
  EditTeamMutationVariables
>;
export type UseEditTeamMutationResult = UseMutationResult<
  EditTeamMutationData,
  ErrorResponse,
  EditTeamMutationVariables
>;

export type EditTeamInvalidateQueriesParams = {
  query: Query;
  data: EditTeamMutationData;
  variables: EditTeamMutationVariables;
};
