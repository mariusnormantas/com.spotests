/** @format */

export interface ErrorResponse {
  response: {
    data: {
      message: string;
    };
  };
}

export type GetErrorResponseMessageParams = {
  error: ErrorResponse;
  defaultMessage?: string;
};
