import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";

// Define a base URL for your API
const baseURL = "http://localhost:4000"; // Replace with your actual API base URL

// Create an Axios instance with the base URL
const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

// Define a generic type for the API response
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Define a function for handling API errors
const handleApiError = (error: AxiosError) => {
  console.log(error, "error");
  if (error.response) {
    // The request was made and the server responded with a status code that falls out of the range of 2xx
    // console.error("Request failed with status:", error.response.status);
    // console.error("Response data:", error.response.data);
  } else if (error.request) {
    // The request was made but no response was received
    // console.error("No response received:", error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    // console.error("Request setup error:", error.message);
  }
  // Return a rejected promise with the error
  return Promise.reject(error);
};

// Define a function for making GET requests
export const get = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response = await axiosInstance.get<ApiResponse<T>>(url, config);
    return response.data as T;
  } catch (error: any) {
    throw error.response.data.message;
  }
};

// Define a function for making POST requests
export const post = async <T, R>(
  path: string,
  data?: T,
  config?: AxiosRequestConfig
): Promise<R> => {
  try {
    const response = await axiosInstance.post<ApiResponse<R>>(
      baseURL + path,
      data,
      config
    );
    return response.data as R;
  } catch (error: any) {
    throw error.response.data.message; // Re-throw the error to propagate it up the call stack
  }
};
