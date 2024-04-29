/** @format */

import { useMutation, useQueryClient } from "react-query";
import { useProtectedApi } from "@/features/auth";
import {
  EditOrganizationLockMutationVariables,
  EditOrganizationLockMutationData,
  UseEditOrganizationLockMutationOptions,
  UseEditOrganizationLockMutationResult,
  EditOrganizationLockMutationParams,
  UseEditOrganizationLockMutationParams,
  EditOrganizationLockInvalidateQueriesParams,
} from "./types";

/**
 * Function, which is used to send request.
 * @param data EditOrganizationLockMutationVariables
 * @returns Promise<EditOrganizationLockMutationData>
 */
const mutationFn = async (
  params: EditOrganizationLockMutationParams,
  variables: EditOrganizationLockMutationVariables
): Promise<EditOrganizationLockMutationData> => {
  const response = await params.protectedApi.put(
    `/api/organization/v1/${params.organizationId}/edit-lock`,
    variables
  );
  return response.data;
};

export const useEditOrganizationLockMutation = (
  params: UseEditOrganizationLockMutationParams,
  options?: UseEditOrganizationLockMutationOptions
): UseEditOrganizationLockMutationResult => {
  // Initializes component's states, hooks and etc.
  const queryClient = useQueryClient();
  const protectedApi = useProtectedApi();

  return useMutation(
    async (variables) =>
      await mutationFn(
        { organizationId: params.organizationId, protectedApi },
        variables
      ),
    {
      ...options,
      /**
       * Successfull mutation's callback.
       * @param data EditOrganizationLockMutationData
       * @param variables EditOrganizationLockMutationVariables
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
}: EditOrganizationLockInvalidateQueriesParams) => {
  // Initializes component's states, hooks and etc.
  const [type, ...keys] = query.queryKey;
  switch (type) {
    case "organizations-listing":
      return true;
    case "organization-view":
      return keys[0] === data.organizationId;
    case "interactions-listing":
      return keys[0] === data.organizationId;
    default:
      return false;
  }
};
