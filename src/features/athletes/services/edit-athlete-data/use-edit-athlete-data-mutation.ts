/** @format */

import { useMutation, useQueryClient } from "react-query";
import { useProtectedApi } from "@/features/auth";
import {
  EditAthleteDataMutationVariables,
  EditAthleteDataMutationData,
  UseEditAthleteDataMutationOptions,
  UseEditAthleteDataMutationResult,
  EditAthleteDataMutationParams,
  UseEditAthleteDataMutationParams,
  EditAthleteDataInvalidateQueriesParams,
} from "./types";

/**
 * Function, which is used to send request.
 * @param data EditAthleteDataMutationVariables
 * @returns Promise<EditAthleteDataMutationData>
 */
const mutationFn = async (
  params: EditAthleteDataMutationParams,
  variables: EditAthleteDataMutationVariables
): Promise<EditAthleteDataMutationData> => {
  // Puts to server and retrieves response.
  const response = await params.protectedApi.put(
    `/api/athlete/v1/${params.athleteId}/edit-data`,
    variables
  );
  return response.data;
};

export const useEditAthleteDataMutation = (
  params: UseEditAthleteDataMutationParams,
  options?: UseEditAthleteDataMutationOptions
): UseEditAthleteDataMutationResult => {
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
       * @param data EditAthleteDataMutationData
       * @param variables EditAthleteDataMutationVariables
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
}: EditAthleteDataInvalidateQueriesParams) => {
  // Initializes component's states, hooks and etc.
  const [type, ...keys] = query.queryKey;

  switch (type) {
    case "athlete-view":
      return keys[0] === data.athleteId;
    case "athletes-listing":
      return typeof keys[0] !== "string" || keys[0] === data.organizationId;
    case "interactions-listing":
      return keys[0] === data.athleteId || keys[0] === data.organizationId;
    default:
      return false;
  }
};
