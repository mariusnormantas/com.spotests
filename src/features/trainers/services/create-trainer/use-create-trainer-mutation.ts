/** @format */

import { useMutation, useQueryClient } from "react-query";
import { useProtectedApi } from "@/features/auth";
import {
  CreateTrainerMutationVariables,
  CreateTrainerMutationData,
  UseCreateTrainerMutationOptions,
  UseCreateTrainerMutationResult,
  CreateTrainerMutationParams,
  UseCreateTrainerMutationParams,
  CreateTrainerInvalidateQueriesParams,
} from "./types";

/**
 * Function, which is used to send request.
 * @param data CreateTrainerMutationVariables
 * @returns Promise<CreateTrainerMutationData>
 */
const mutationFn = async (
  params: CreateTrainerMutationParams,
  variables: CreateTrainerMutationVariables
): Promise<CreateTrainerMutationData> => {
  // Chooses correct endpoint.
  const query = new URLSearchParams();
  params.organizationId && query.append("organization", params.organizationId);

  // Posts to server and retrieves response.
  const response = await params.protectedApi.post(
    `/api/trainer/v1/create?${query.toString()}`,
    variables
  );
  return response.data;
};

export const useCreateTrainerMutation = (
  params: UseCreateTrainerMutationParams,
  options?: UseCreateTrainerMutationOptions
): UseCreateTrainerMutationResult => {
  // Initializes component's states, hooks and etc.
  const protectedApi = useProtectedApi();
  const queryClient = useQueryClient();
  return useMutation(
    async (variables) =>
      await mutationFn({ protectedApi, ...params }, variables),
    {
      ...options,
      /**
       * Successfull mutation's callback.
       * @param data CreateTrainerMutationData
       * @param variables CreateTrainerMutationVariables
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
}: CreateTrainerInvalidateQueriesParams) => {
  // Initializes component's states, hooks and etc.
  const [type, ...keys] = query.queryKey;

  switch (type) {
    case "organization-view":
      return keys[0] === data.organizationId;
    case "trainers-listing":
      return typeof keys[0] !== "string" || keys[0] === data.organizationId;
    case "manage-trainers-listing":
      return true;
    case "interactions-listing":
      return keys[0] === data.organizationId;
    default:
      return false;
  }
};
