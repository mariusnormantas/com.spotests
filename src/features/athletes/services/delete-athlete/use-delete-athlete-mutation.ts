/** @format */

import { useMutation, useQueryClient } from "react-query";
import { useProtectedApi } from "@/features/auth";
import {
  DeleteAthleteMutationData,
  UseDeleteAthleteMutationOptions,
  UseDeleteAthleteMutationResult,
  DeleteAthleteMutationParams,
  UseDeleteAthleteMutationParams,
  DeleteAthleteInvalidateQueriesParams,
  DeleteAthleteRemoveQueriesParams,
} from "./types";

/**
 * Function, which is used to send request.
 * @param data DeleteAthleteMutationVariables
 * @returns Promise<DeleteAthleteMutationData>
 */
const mutationFn = async (
  params: DeleteAthleteMutationParams
): Promise<DeleteAthleteMutationData> => {
  // Puts to server and retrieves response.
  const response = await params.protectedApi.delete(
    `/api/athlete/v1/${params.athleteId}/delete`
  );
  return response.data;
};

export const useDeleteAthleteMutation = (
  params: UseDeleteAthleteMutationParams,
  options?: UseDeleteAthleteMutationOptions
): UseDeleteAthleteMutationResult => {
  // Initializes component's states, hooks and etc.
  const queryClient = useQueryClient();
  const protectedApi = useProtectedApi();
  return useMutation(
    async () => await mutationFn({ protectedApi, ...params }),
    {
      ...options,
      /**
       * Successfull mutation's callback.
       * @param data DeleteAthleteMutationData
       * @param variables DeleteAthleteMutationVariables
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
}: DeleteAthleteInvalidateQueriesParams) => {
  // Initializes component's states, hooks and etc.
  const [type, ...keys] = query.queryKey;

  switch (type) {
    case "organization-view":
      return keys[0] === data.organizationId;
    case "athletes-listing":
      return typeof keys[0] !== "string" || keys[0] === data.organizationId;
    case "team-view":
      return data.teams.includes(keys[0] as string);
    case "manage-athletes-listing":
      return data.teams.some((teamId) => teamId === keys[0]);
    case "interactions-listing":
      return keys[0] === data.organizationId;
    default:
      return false;
  }
};

const removeQueries = ({ query, data }: DeleteAthleteRemoveQueriesParams) => {
  // Initializes component's states, hooks and etc.
  const [type, ...keys] = query.queryKey;

  switch (type) {
    case "athlete-view":
      return keys[0] === data.athleteId;
    default:
      return false;
  }
};
