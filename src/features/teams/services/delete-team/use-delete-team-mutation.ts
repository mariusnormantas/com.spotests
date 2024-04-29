/** @format */

import { useMutation, useQueryClient } from "react-query";
import { useProtectedApi } from "@/features/auth";
import {
  DeleteTeamMutationData,
  UseDeleteTeamMutationOptions,
  UseDeleteTeamMutationResult,
  DeleteTeamMutationParams,
  UseDeleteTeamMutationParams,
  DeleteTeamInvalidateQueriesParams,
  DeleteTeamRemoveQueriesParams,
} from "./types";

/**
 * Function, which is used to send request.
 * @param data DeleteTeamMutationVariables
 * @returns Promise<DeleteTeamMutationData>
 */
const mutationFn = async (
  params: DeleteTeamMutationParams
): Promise<DeleteTeamMutationData> => {
  // Puts to server and retrieves response.
  const response = await params.protectedApi.delete(
    `/api/team/v1/${params.teamId}/delete`
  );
  return response.data;
};

export const useDeleteTeamMutation = (
  params: UseDeleteTeamMutationParams,
  options?: UseDeleteTeamMutationOptions
): UseDeleteTeamMutationResult => {
  // Initializes component's states, hooks and etc.
  const queryClient = useQueryClient();
  const protectedApi = useProtectedApi();
  return useMutation(
    async () => await mutationFn({ protectedApi, ...params }),
    {
      ...options,
      /**
       * Successfull mutation's callback.
       * @param data DeleteTeamMutationData
       * @param variables DeleteTeamMutationVariables
       * @param context unknown
       */
      onSuccess: (data, variables, context) => {
        queryClient.invalidateQueries({
          predicate: (query) => invalidateQueries({ query, data, variables }),
        });
        queryClient.removeQueries({
          predicate: (query) => removeQueries({ query, data, variables }),
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
}: DeleteTeamInvalidateQueriesParams) => {
  // Initializes component's states, hooks and etc.
  const [type, ...keys] = query.queryKey;
  switch (type) {
    case "organizations-listing":
      return true;
    case "organization-view":
      return keys[0] === data.organizationId;
    case "teams-listing":
      return typeof keys[0] !== "string" || keys[0] === data.organizationId;
    case "interactions-listing":
      return keys[0] === data.organizationId;
    default:
      return false;
  }
};

const removeQueries = ({ query, data }: DeleteTeamRemoveQueriesParams) => {
  // Initializes component's states, hooks and etc.
  const [type, ...keys] = query.queryKey;
  switch (type) {
    case "team-view":
      return keys[0] === data.teamId;
    case "interactions-listing":
      return keys[0] === data.teamId;
    default:
      return false;
  }
};
