/** @format */

import { useMutation, useQueryClient } from "react-query";
import { useProtectedApi } from "@/features/auth";
import {
  EditTeamMutationVariables,
  EditTeamMutationData,
  UseEditTeamMutationOptions,
  UseEditTeamMutationResult,
  EditTeamMutationParams,
  UseEditTeamMutationParams,
  EditTeamInvalidateQueriesParams,
} from "./types";

/**
 * Function, which is used to send request.
 * @param data EditTeamMutationVariables
 * @returns Promise<EditTeamMutationData>
 */
const mutationFn = async (
  params: EditTeamMutationParams,
  variables: EditTeamMutationVariables
): Promise<EditTeamMutationData> => {
  // Puts to server and retrieves response.
  const response = await params.protectedApi.put(
    `/api/team/v1/${params.teamId}/edit`,
    variables
  );
  return response.data;
};

export const useEditTeamMutation = (
  params: UseEditTeamMutationParams,
  options?: UseEditTeamMutationOptions
): UseEditTeamMutationResult => {
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
       * @param data EditTeamMutationData
       * @param variables EditTeamMutationVariables
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
}: EditTeamInvalidateQueriesParams) => {
  // Initializes component's states, hooks and etc.
  const [type, ...keys] = query.queryKey;
  switch (type) {
    case "teams-listing":
      return typeof keys[0] !== "string" || keys[0] === data.organizationId;
    case "team-view":
      return keys[0] === data.teamId;
    case "interactions-listing":
      return keys[0] === data.organizationId || keys[0] === data.teamId;
    default:
      return false;
  }
};
