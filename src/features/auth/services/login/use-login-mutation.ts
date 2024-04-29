/** @format */

import { useMutation, useQueryClient } from "react-query";
import { apiClient } from "@/api";
import { useAuthContext } from "../../hooks";
import {
  LoginMutationVariables,
  LoginMutationData,
  UseLoginMutationOptions,
  UseLoginMutationResult,
} from "./types";

/**
 * Function, which is used to send request.
 * @param data LoginMutationVariables
 * @returns Promise<CreateOrganizationResponse>
 */
const mutationFn = async (
  variables: LoginMutationVariables
): Promise<LoginMutationData> => {
  const response = await apiClient.post("/api/auth/v1/login", variables);
  return response.data;
};

export const useLoginMutation = (
  options?: UseLoginMutationOptions
): UseLoginMutationResult => {
  // Initializes component's states, hooks and etc.
  const queryClient = useQueryClient();
  const { setAccessToken } = useAuthContext();

  return useMutation(mutationFn, {
    ...options,
    /**
     * Successfull mutation's callback.
     * @param data LoginMutationData
     * @param variables LoginMutationVariables
     * @param context unknown
     */
    onSuccess: (data, variables, context) => {
      setAccessToken(data.accessToken);
      queryClient.invalidateQueries("User");
      if (options?.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
  });
};
