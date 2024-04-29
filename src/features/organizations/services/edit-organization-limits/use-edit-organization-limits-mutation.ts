/** @format */

import { useMutation, useQueryClient } from "react-query";
import { useProtectedApi } from "@/features/auth";
import {
  EditOrganizationLimitsMutationVariables,
  EditOrganizationLimitsMutationData,
  UseEditOrganizationLimitsMutationOptions,
  UseEditOrganizationLimitsMutationResult,
  EditOrganizationLimitsMutationParams,
  UseEditOrganizationLimitsMutationParams,
  EditOrganizationLimitsInvalidateQueriesParams,
} from "./types";

/**
 * Function, which is used to send request.
 * @param data EditOrganizationLimitsMutationVariables
 * @returns Promise<EditOrganizationLimitsMutationData>
 */
const mutationFn = async (
  params: EditOrganizationLimitsMutationParams,
  variables: EditOrganizationLimitsMutationVariables
): Promise<EditOrganizationLimitsMutationData> => {
  const response = await params.protectedApi.put(
    `/api/organization/v1/${params.organizationId}/edit-limits`,
    variables
  );
  return response.data;
};

export const useEditOrganizationLimitsMutation = (
  params: UseEditOrganizationLimitsMutationParams,
  options?: UseEditOrganizationLimitsMutationOptions
): UseEditOrganizationLimitsMutationResult => {
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
       * @param data EditOrganizationLimitsMutationData
       * @param variables EditOrganizationLimitsMutationVariables
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
}: EditOrganizationLimitsInvalidateQueriesParams) => {
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
