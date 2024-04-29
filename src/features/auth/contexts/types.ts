/** @format */
import React from "react";

export type AuthProviderProps = {
  children: React.ReactNode;
};

export interface UseAuthContextReturn {
  accessToken: string | undefined;
  setAccessToken: React.Dispatch<React.SetStateAction<string | undefined>>;
  user: UserData | undefined;
  isLoggingOut: boolean;
  setLoggingOut: React.Dispatch<React.SetStateAction<boolean>>;
}

export type UserData = {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "organization" | "trainer" | "athlete";
  iat: number;
  exp: number;
};
