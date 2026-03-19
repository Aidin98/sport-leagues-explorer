import axios, { AxiosError } from "axios";
import type { ApiError } from "../types";

const BASE_URL = "https://www.thesportsdb.com/api/v1/json/3";
const DEFAULT_TIMEOUT = 10000;

const statusMessages: Record<number, string> = {
  400: "Invalid request",
  401: "Unauthorized - authentication required",
  403: "Access forbidden",
  404: "Resource not found",
  429: "Too many requests - please try again later",
  500: "Server error - please try again",
  503: "Service temporarily unavailable",
};

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const apiError: ApiError = {
      status: error.response?.status ?? 0,
      message: getErrorMessage(error),
    };
    return Promise.reject(apiError);
  }
);

function getErrorMessage(error: AxiosError): string {
  // Network errors (no response)
  if (!error.response) {
    if (error.code === "ECONNABORTED") {
      return "Request timeout - please try again";
    }
    if (error.code === "ERR_NETWORK") {
      return "Network error - please check your connection";
    }
    return "Unable to connect to server";
  }

  // HTTP errors (with response)
  const status = error.response.status;
  const data = error.response.data as { message?: string };
  const defaultMessage = data?.message || error.message || "An error occurred";

  return statusMessages[status] || defaultMessage;
}


export default apiClient