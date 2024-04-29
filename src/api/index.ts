/** @format */

import axios from "axios";

// Base server's URL.
export const baseURL = import.meta.env.VITE_API_URL;

// Creates protected axios URL which is used for protected data's fetching.
export const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export * from "./types";
export * from "./helpers";
