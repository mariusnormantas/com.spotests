/** @format */

import { GetErrorResponseMessageParams } from "./types";

/**
 * Function, which formats error message from response's error.
 */
export const getErrorResponseMessage = ({
  error,
  defaultMessage = "Unexpected Error Occurred",
}: GetErrorResponseMessageParams) => {
  // Extracts message from error's response.
  const { message } = error.response.data;

  // Checks, if response has correct message to display.
  if (message && typeof message === "string") {
    return message;
  }

  // Otherwise, returns default message.
  return defaultMessage;
};
