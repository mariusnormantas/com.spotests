/** @format */

import { useMutation, useQueryClient } from "react-query";
import { useProtectedApi } from "@/features/auth";
import {
  CreateTeamMutationVariables,
  CreateTeamMutationData,
  UseCreateTeamMutationOptions,
  UseCreateTeamMutationResult,
  CreateTeamMutationParams,
  UseCreateTeamMutationParams,
  CreateTeamInvalidateQueriesParams,
} from "./types";

/**
 * Function, which is used to send request.
 * @param data CreateTeamMutationVariables
 * @returns Promise<CreateTeamMutationData>
 */
const mutationFn = async (
  params: CreateTeamMutationParams,
  variables: CreateTeamMutationVariables
): Promise<CreateTeamMutationData> => {
  // Chooses correct endpoint.
  const query = new URLSearchParams();
  params.organizationId && query.append("organization", params.organizationId);

  // Posts to server and retrieves response.
  const response = await params.protectedApi.post(
    `/api/team/v1/create?${query.toString()}`,
    variables
  );
  return response.data;
};

export const useCreateTeamMutation = (
  params: UseCreateTeamMutationParams,
  options?: UseCreateTeamMutationOptions
): UseCreateTeamMutationResult => {
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
       * @param data CreateTeamMutationData
       * @param variables CreateTeamMutationVariables
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
}: CreateTeamInvalidateQueriesParams) => {
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
