import {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { BaxiosRequestConfig, BaxiosResponse } from "../types";

function toRequestConfig(config: BaxiosRequestConfig): AxiosRequestConfig {
  return {} as AxiosRequestConfig;
}

function toInternalRequestConfig(
  config: BaxiosRequestConfig
): InternalAxiosRequestConfig {
  return {} as InternalAxiosRequestConfig;
}

function toBaxiosResponse<DataType>(
  response: AxiosResponse
): BaxiosResponse<DataType> {
  return {
    config: response.config,
    data: response.data,
    headers: response.headers,
    status: {
      code: response.status,
      name: response.statusText,
    },
    request: response.request,
    axiosResponse: response,
  };
}

function toAxiosResponse<DataType>(
  response: BaxiosResponse<DataType>
): AxiosResponse {
  return {
    config: response.config,
    data: response.data,
    headers: response.headers,
    statusText: response.status.name,
    status: response.status.code,
    request: response.request,
  };
}

export {
  toRequestConfig,
  toBaxiosResponse,
  toAxiosResponse,
  toInternalRequestConfig,
};
