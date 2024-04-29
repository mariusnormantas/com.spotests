/** @format */

import { useMutation, useQueryClient } from "react-query";
import { useProtectedApi } from "@/features/auth";
import {
  DeleteTrainerMutationData,
  UseDeleteTrainerMutationOptions,
  UseDeleteTrainerMutationResult,
  DeleteTrainerMutationParams,
  UseDeleteTrainerMutationParams,
  DeleteTrainerInvalidateQueriesParams,
  DeleteTrainerRemoveQueriesParams,
} from "./types";

/**
 * Function, which is used to send request.
 * @param data DeleteTrainerMutationVariables
 * @returns Promise<DeleteTrainerMutationData>
 */
const mutationFn = async (
  params: DeleteTrainerMutationParams
): Promise<DeleteTrainerMutationData> => {
  // Puts to server and retrieves response.
  const response = await params.protectedApi.delete(
    `/api/trainer/v1/${params.trainerId}/delete`
  );
  return response.data;
};

export const useDeleteTrainerMutation = (
  params: UseDeleteTrainerMutationParams,
  options?: UseDeleteTrainerMutationOptions
): UseDeleteTrainerMutationResult => {
  // Initializes component's states, hooks and etc.
  const queryClient = useQueryClient();
  const protectedApi = useProtectedApi();
  return useMutation(
    async () => await mutationFn({ protectedApi, ...params }),
    {
      ...options,
      /**
       * Successfull mutation's callback.
       * @param data DeleteTrainerMutationData
       * @param variables DeleteTrainerMutationVariables
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
}: DeleteTrainerInvalidateQueriesParams) => {
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

const removeQueries = ({ query, data }: DeleteTrainerRemoveQueriesParams) => {
  // Initializes component's states, hooks and etc.
  const [type, ...keys] = query.queryKey;

  switch (type) {
    case "trainer-view":
      return keys[0] === data.trainerId;
    default:
      return false;
  }
};
