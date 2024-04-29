/** @format */

import { useMutation, useQueryClient } from "react-query";
import { useProtectedApi } from "@/features/auth";
import {
  CreateAthleteMutationVariables,
  CreateAthleteMutationData,
  UseCreateAthleteMutationOptions,
  UseCreateAthleteMutationResult,
  CreateAthleteMutationParams,
  UseCreateAthleteMutationParams,
  CreateAthleteInvalidateQueriesParams,
} from "./types";

/**
 * Function, which is used to send request.
 * @param data CreateAthleteMutationVariables
 * @returns Promise<CreateAthleteMutationData>
 */
const mutationFn = async (
  params: CreateAthleteMutationParams,
  variables: CreateAthleteMutationVariables
): Promise<CreateAthleteMutationData> => {
  // Chooses correct endpoint.
  const query = new URLSearchParams();
  params.organizationId && query.append("organization", params.organizationId);

  // Posts to server and retrieves response.
  const response = await params.protectedApi.post(
    `/api/athlete/v1/create?${query.toString()}`,
    variables
  );
  return response.data;
};

export const useCreateAthleteMutation = (
  params: UseCreateAthleteMutationParams,
  options?: UseCreateAthleteMutationOptions
): UseCreateAthleteMutationResult => {
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
       * @param data CreateAthleteMutationData
       * @param variables CreateAthleteMutationVariables
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
}: CreateAthleteInvalidateQueriesParams) => {
  // Initializes component's states, hooks and etc.
  const [type, ...keys] = query.queryKey;

  switch (type) {
    case "organization-view":
      return keys[0] === data.organizationId;
    case "athletes-listing":
      return typeof keys[0] !== "string" || keys[0] === data.organizationId;
    case "interactions-listing":
      return keys[0] === data.organizationId;
    case "manage-athletes-listing":
      return true; // Invalidates all the listings. When admin is in process, we could check params where organizationId is stored. When organization is in process, we should invalidate all the management's listings.
    default:
      return false;
  }
};
