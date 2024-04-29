/** @format */

import { Axios } from "axios";
import { Query, UseMutationOptions, UseMutationResult } from "react-query";
import { ErrorResponse } from "@/api";

export type EditTeamMembersMutationVariables = {
  trainers: Array<string> | [];
  athletes: Array<string> | [];
};

export type EditTeamMembersMutationData = {
  teamId: string;
  organizationId: string;
  removed: { trainers: Array<string> | []; athletes: Array<string> | [] };
};

export type UseEditTeamMembersMutationParams = {
  teamId: string;
};

export interface EditTeamMembersMutationParams
  extends UseEditTeamMembersMutationParams {
  protectedApi: Axios;
}

export type UseEditTeamMembersMutationOptions = UseMutationOptions<
  EditTeamMembersMutationData,
  ErrorResponse,
  EditTeamMembersMutationVariables
>;
export type UseEditTeamMembersMutationResult = UseMutationResult<
  EditTeamMembersMutationData,
  ErrorResponse,
  EditTeamMembersMutationVariables
>;

export type EditTeamMembersInvalidateQueriesParams = {
  query: Query;
  data: EditTeamMembersMutationData;
  variables: EditTeamMembersMutationVariables;
};
