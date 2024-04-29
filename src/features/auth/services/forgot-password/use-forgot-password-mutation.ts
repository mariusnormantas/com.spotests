/** @format */

import { useMutation } from "react-query";
import { apiClient } from "@/api";
import {
  ForgotPasswordMutationData,
  ForgotPasswordMutationVariables,
  UseForgotPasswordMutationOptions,
  UseForgotPasswordMutationResult,
} from "./types";

/**
 * Function, which is used to send request.
 * @param data ForgotPasswordMutationVariables
 * @returns Promise<CreateOrganizationResponse>
 */
const mutationFn = async (
  variables: ForgotPasswordMutationVariables
): Promise<ForgotPasswordMutationData> => {
  const response = await apiClient.post("/api/auth/v1/forgot", variables);
  return response.data;
};

export const useForgotPasswordMutation = (
  options?: UseForgotPasswordMutationOptions
): UseForgotPasswordMutationResult => {
  return useMutation(mutationFn, options);
};
