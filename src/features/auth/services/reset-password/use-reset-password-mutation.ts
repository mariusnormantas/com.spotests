/** @format */

import { useMutation } from "react-query";
import { apiClient } from "@/api";
import {
  ResetPasswordMutationData,
  ResetPasswordMutationParams,
  ResetPasswordMutationVariables,
  UseResetPasswordMutationOptions,
  UseResetPasswordMutationResult,
} from "./types";

/**
 * Function, which is used to send request.
 * @param data ResetPasswordMutationVariables
 * @returns ResetPasswordMutationData
 */
const mutationFn = async (
  params: ResetPasswordMutationParams,
  variables: ResetPasswordMutationVariables
): Promise<ResetPasswordMutationData> => {
  const response = await apiClient.post(
    `/api/auth/v1/reset/${params.token}`,
    variables
  );
  return response.data;
};

export const useResetPasswordMutation = (
  params: ResetPasswordMutationParams,
  options?: UseResetPasswordMutationOptions
): UseResetPasswordMutationResult => {
  return useMutation(async (variables) => await mutationFn(params, variables), {
    ...options,
    /**
     * Mutation's initialization callback.
     * @param variables ResetPasswordMutationVariables
     */
    onMutate: (variables) => {
      if (options?.onMutate) {
        options.onMutate(variables);
      }
    },
    /**
     * Successfull mutation's callback.
     * @param data ResetPasswordMutationData
     * @param variables ResetPasswordMutationVariables
     * @param context unknown
     */
    onSuccess: (data, variables, context) => {
      if (options?.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    /**
     * Unsuccessfull mutation's callback.
     * @param error ErrorResponse
     * @param variables ResetPasswordMutationVariables
     * @param context unknown
     */
    onError: (error, variables, context) => {
      if (options?.onError) {
        options.onError(error, variables, context);
      }
    },
    /**
     * Unsuccessfull mutation's callback.
     * @param data ResetPasswordMutationData
     * @param error ErrorResponse
     * @param variables ResetPasswordMutationVariables
     * @param context unknown
     */
    onSettled: (data, error, variables, context) => {
      if (options?.onSettled) {
        options.onSettled(data, error, variables, context);
      }
    },
  });
};
