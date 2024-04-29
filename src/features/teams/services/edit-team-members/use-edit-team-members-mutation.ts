/** @format */

import { useMutation, useQueryClient } from "react-query";
import { useProtectedApi } from "@/features/auth";
import {
  EditTeamMembersMutationVariables,
  EditTeamMembersMutationData,
  UseEditTeamMembersMutationOptions,
  UseEditTeamMembersMutationResult,
  EditTeamMembersMutationParams,
  UseEditTeamMembersMutationParams,
  EditTeamMembersInvalidateQueriesParams,
} from "./types";

/**
 * Function, which is used to send request.
 * @param data EditTeamMembersMutationVariables
 * @returns Promise<EditTeamMembersMutationData>
 */
const mutationFn = async (
  params: EditTeamMembersMutationParams,
  variables: EditTeamMembersMutationVariables
): Promise<EditTeamMembersMutationData> => {
  // Puts to server and retrieves response.
  const response = await params.protectedApi.put(
    `/api/team/v1/${params.teamId}/edit-members`,
    variables
  );
  return response.data;
};

export const useEditTeamMembersMutation = (
  params: UseEditTeamMembersMutationParams,
  options?: UseEditTeamMembersMutationOptions
): UseEditTeamMembersMutationResult => {
  // Initializes component's states, hooks and etc.
  const queryClient = useQueryClient();
  const protectedApi = useProtectedApi();
  return useMutation(
    async (variables) =>
      await mutationFn({ protectedApi, ...params }, variables),
    {
      ...options,
      /**
       * Successfull mutation's callback.
       * @param data EditTeamMembersMutationData
       * @param variables EditTeamMembersMutationVariables
       * @param context unknown
       */
      onSuccess: (data, variables, context) => {
        queryClient.invalidateQueries({
          predicate: (query) => invalidateQueries({ query, data, variables }),
        });
        if (options?.onSuccess) {
          options.onSuccess(data, variables, context);
        }
      },
    }
  );
};

const invalidateQueries = ({
  query,
  data,
  variables,
}: EditTeamMembersInvalidateQueriesParams) => {
  // Initializes component's states, hooks and etc.
  const [type, ...keys] = query.queryKey;

  switch (type) {
    case "team-view":
      return keys[0] === data.teamId;
    case "teams-listing":
      return (
        (keys[0] === data.organizationId || typeof keys[0] !== "string") &&
        data.teamId === data.teamId
      );
    case "trainer-view":
      return (
        variables.trainers.some((trainerId) => trainerId === keys[0]) ||
        data.removed.trainers.some((trainerId) => trainerId === keys[0])
      );
    case "trainers-listing":
      return (
        typeof keys[0] !== "string" ||
        keys[0] === data.teamId ||
        keys[0] === data.organizationId ||
        (keys[0] === data.organizationId && keys[1] === data.teamId)
      );
    case "athlete-view":
      return (
        variables.athletes.some((athleteId) => athleteId === keys[0]) ||
        data.removed.athletes.some((athleteId) => athleteId === keys[0])
      );
    case "athletes-listing":
      return (
        typeof keys[0] !== "string" ||
        keys[0] === data.teamId ||
        keys[0] === data.organizationId ||
        (keys[0] === data.organizationId && keys[1] === data.teamId)
      );
    case "manage-trainers-listing":
      return (
        (keys[0] === data.organizationId && keys[1] === data.teamId) ||
        keys[0] === data.teamId
      );
    case "manage-athletes-listing":
      return (
        (keys[0] === data.organizationId && keys[1] === data.teamId) ||
        keys[0] === data.teamId
      );
    case "interactions-listing":
      return (
        keys[0] === data.teamId ||
        keys[0] === data.organizationId ||
        variables.trainers.some((trainerId) => trainerId === keys[0]) ||
        data.removed.trainers.some((trainerId) => trainerId === keys[0]) ||
        variables.athletes.some((athleteId) => athleteId === keys[0]) ||
        data.removed.athletes.some((athleteId) => athleteId === keys[0])
      );
    default:
      return false;
  }
};
