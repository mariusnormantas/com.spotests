/** @format */

import { ErrorResponse } from "@/api";
import { UseMutationOptions, UseMutationResult } from "react-query";

export type LogoutMutationVariables = null;

export type LogoutMutationData = undefined;

export type UseLogoutMutationOptions = UseMutationOptions<
  LogoutMutationData,
  ErrorResponse,
  LogoutMutationVariables
>;

export type UseLogoutMutationResult = UseMutationResult<
  LogoutMutationData,
  ErrorResponse,
  LogoutMutationVariables
>;
