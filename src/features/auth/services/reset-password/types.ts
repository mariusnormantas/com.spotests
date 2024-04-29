/** @format */

import { ErrorResponse } from "@/api";
import { UseMutationOptions, UseMutationResult } from "react-query";

export type ResetPasswordMutationVariables = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type ResetPasswordMutationData = undefined;

export type ResetPasswordMutationParams = {
  token: string;
};

export type UseResetPasswordMutationOptions = UseMutationOptions<
  ResetPasswordMutationData,
  ErrorResponse,
  ResetPasswordMutationVariables
>;

export type UseResetPasswordMutationResult = UseMutationResult<
  ResetPasswordMutationData,
  ErrorResponse,
  ResetPasswordMutationVariables
>;
