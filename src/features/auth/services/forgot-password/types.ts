/** @format */

import { ErrorResponse } from "@/api";
import { UseMutationOptions, UseMutationResult } from "react-query";

export type ForgotPasswordMutationVariables = {
  email: string;
};

export type ForgotPasswordMutationData = undefined;

export type UseForgotPasswordMutationOptions = UseMutationOptions<
  ForgotPasswordMutationData,
  ErrorResponse,
  ForgotPasswordMutationVariables
>;

export type UseForgotPasswordMutationResult = UseMutationResult<
  ForgotPasswordMutationData,
  ErrorResponse,
  ForgotPasswordMutationVariables
>;
