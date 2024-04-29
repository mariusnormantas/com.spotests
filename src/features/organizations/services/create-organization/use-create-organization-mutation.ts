/** @format */

import { useMutation, useQueryClient } from "react-query";
import { useProtectedApi } from "@/features/auth";
import {
  CreateOrganizationMutationVariables,
  CreateOrganizationMutationData,
  UseCreateOrganizationMutationOptions,
  UseCreateOrganizationMutationResult,
  CreateOrganizationMutationParams,
  CreateOrganizationInvalidateQueriesParams,
} from "./types";

/**
 * Function, which is used to send request.
 * @param data CreateOrganizationMutationVariables
 * @returns Promise<CreateOrganizationMutationData>
 */
const mutationFn = async (
  params: CreateOrganizationMutationParams,
  variables: CreateOrganizationMutationVariables
): Promise<CreateOrganizationMutationData> => {
  const response = await params.protectedApi.post(
    "/api/organization/v1/create",
    variables
  );
  return response.data;
};

export const useCreateOrganizationMutation = (
  options?: UseCreateOrganizationMutationOptions
): UseCreateOrganizationMutationResult => {
  // Initializes component's states, hooks and etc.
  const queryClient = useQueryClient();
  const protectedApi = useProtectedApi();

  return useMutation(
    async (variables) => await mutationFn({ protectedApi }, variables),
    {
      ...options,
      /**
       * Successfull mutation's callback.
       * @param data CreateOrganizationMutationData
       * @param variables CreateOrganizationMutationVariables
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
}: CreateOrganizationInvalidateQueriesParams) => {
  // Initializes component's states, hooks and etc.
  const [type] = query.queryKey;
  switch (type) {
    case "organizations-listing":
      return true;
    default:
      return false;
  }
};
