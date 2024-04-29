/** @format */

import { useMutation, useQueryClient } from "react-query";
import { useProtectedApi } from "@/features/auth";
import {
  EditAthleteAccountMutationVariables,
  EditAthleteAccountMutationData,
  UseEditAthleteAccountMutationOptions,
  UseEditAthleteAccountMutationResult,
  EditAthleteAccountMutationParams,
  UseEditAthleteAccountMutationParams,
  EditAthleteAccountInvalidateQueriesParams,
} from "./types";

/**
 * Function, which is used to send request.
 * @param data EditAthleteAccountMutationVariables
 * @returns Promise<EditAthleteAccountMutationData>
 */
const mutationFn = async (
  params: EditAthleteAccountMutationParams,
  variables: EditAthleteAccountMutationVariables
): Promise<EditAthleteAccountMutationData> => {
  // Puts to server and retrieves response.
  const response = await params.protectedApi.put(
    `/api/athlete/v1/${params.athleteId}/edit-account`,
    variables
  );
  return response.data;
};

export const useEditAthleteAccountMutation = (
  params: UseEditAthleteAccountMutationParams,
  options?: UseEditAthleteAccountMutationOptions
): UseEditAthleteAccountMutationResult => {
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
       * @param data EditAthleteAccountMutationData
       * @param variables EditAthleteAccountMutationVariables
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
}: EditAthleteAccountInvalidateQueriesParams) => {
  // Initializes component's states, hooks and etc.
  const [type, ...keys] = query.queryKey;

  switch (type) {
    case "athlete-view":
      return keys[0] === data.athleteId;
    case "athletes-listing":
      return typeof keys[0] !== "string" || keys[0] === data.organizationId;
    case "manage-athletes-listing":
      return data.teams.some((teamId) => teamId === keys[0]);
    case "interactions-listing":
      return keys[0] === data.athleteId || keys[0] === data.organizationId;
    default:
      return false;
  }
};
