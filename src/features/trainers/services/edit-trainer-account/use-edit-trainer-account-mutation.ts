/** @format */

import { useMutation, useQueryClient } from "react-query";
import { useProtectedApi } from "@/features/auth";
import {
  EditTrainerAccountMutationVariables,
  EditTrainerAccountMutationData,
  UseEditTrainerAccountMutationOptions,
  UseEditTrainerAccountMutationResult,
  EditTrainerAccountMutationParams,
  UseEditTrainerAccountMutationParams,
  EditTrainerAccountInvalidateQueriesParams,
} from "./types";

/**
 * Function, which is used to send request.
 * @param data EditTrainerAccountMutationVariables
 * @returns Promise<EditTrainerAccountMutationData>
 */
const mutationFn = async (
  params: EditTrainerAccountMutationParams,
  variables: EditTrainerAccountMutationVariables
): Promise<EditTrainerAccountMutationData> => {
  // Puts to server and retrieves response.
  const response = await params.protectedApi.put(
    `/api/trainer/v1/${params.trainerId}/edit-account`,
    variables
  );
  return response.data;
};

export const useEditTrainerAccountMutation = (
  params: UseEditTrainerAccountMutationParams,
  options?: UseEditTrainerAccountMutationOptions
): UseEditTrainerAccountMutationResult => {
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
       * @param data EditTrainerAccountMutationData
       * @param variables EditTrainerAccountMutationVariables
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
}: EditTrainerAccountInvalidateQueriesParams) => {
  // Initializes component's states, hooks and etc.
  const [type, ...keys] = query.queryKey;

  switch (type) {
    case "trainer-view":
      return keys[0] === data.trainerId;
    case "trainers-listing":
      return typeof keys[0] !== "string" || keys[0] === data.organizationId;
    case "manage-trainers-listing":
      return true;
    case "interactions-listing":
      return keys[0] === data.trainerId || keys[0] === data.organizationId;
    default:
      return false;
  }
};
