/** @format */

import { ErrorResponse } from "@/api";
import { UseMutationOptions, UseMutationResult } from "react-query";

export type LoginMutationVariables = {
  email: string;
  password: string;
};

export type LoginMutationData = {
  accessToken: string;
};

export type UseLoginMutationOptions = UseMutationOptions<
  LoginMutationData,
  ErrorResponse,
  LoginMutationVariables
>;

export type UseLoginMutationResult = UseMutationResult<
  LoginMutationData,
  ErrorResponse,
  LoginMutationVariables
>;
