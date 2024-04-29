/** @format */

import { useMutation, useQueryClient } from "react-query";
import { apiClient } from "@/api";
import { useAuthContext } from "../../hooks";
import {
  LogoutMutationData,
  UseLogoutMutationOptions,
  UseLogoutMutationResult,
} from "./types";

/**
 * Function, which is used to send request.
 * @returns Promise<LogoutMutationData>
 */
const mutationFn = async (): Promise<LogoutMutationData> => {
  const response = await apiClient.post("/api/auth/v1/logout");
  return response.data;
};

export const useLogoutMutation = (
  options?: UseLogoutMutationOptions
): UseLogoutMutationResult => {
  // Initializes component's states, hooks and etc.
  const queryClient = useQueryClient();
  const { setLoggingOut, setAccessToken } = useAuthContext();

  return useMutation(mutationFn, {
    ...options,
    /**
     * Mutation's initialization callback.
     * @param variables LogoutMutationVariables
     */
    onMutate: (variables) => {
      setLoggingOut(true);
      if (options?.onMutate) {
        options.onMutate(variables);
      }
    },
    /**
     * Successfull mutation's callback.
     * @param data LogoutMutationData
     * @param variables LogoutMutationVariables
     * @param context unknown
     */
    onSuccess: (data, variables, context) => {
      setAccessToken(undefined);
      queryClient.removeQueries();
      if (options?.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    /**
     * Unsuccessfull mutation's callback.
     * @param data LogoutMutationData
     * @param error ErrorResponse
     * @param variables LogoutMutationVariables
     * @param context unknown
     */
    onSettled: (data, error, variables, context) => {
      setLoggingOut(false);
      if (options?.onSettled) {
        options.onSettled(data, error, variables, context);
      }
    },
  });
};
