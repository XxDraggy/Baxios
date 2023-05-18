import {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { toAxiosResponse, toInternalRequestConfig } from "./helper";
import { BaxiosInterceptorData, BaxiosInterceptorObject } from "../types";

const run = {
  request: {
    error: (interceptor: BaxiosInterceptorData<any>, error: any) =>
      interceptor.error(error),
    success: (
      interceptor: BaxiosInterceptorData<any>,
      config: InternalAxiosRequestConfig
    ) => toInternalRequestConfig(interceptor.success(config)),
  },
  response: {
    error: (interceptor: BaxiosInterceptorData<any>, error: any) =>
      interceptor.error(error),
    success: (
      interceptor: BaxiosInterceptorData<any>,
      response: AxiosResponse
    ) => toAxiosResponse(interceptor.success(response)),
  },
};

function reqisterBaxiosInterceptor(
  axiosInstance: AxiosInstance,
  interceptor: BaxiosInterceptorData<any>
): number {
  if (interceptor.type == "request") {
    return axiosInstance.interceptors[interceptor.type].use(
      (config) => run.request.success(interceptor, config),
      (error) => run.request.error(interceptor, error)
    );
  } else {
    return axiosInstance.interceptors[interceptor.type].use(
      (response) => run.response.success(interceptor, response),
      (error) => run.response.error(interceptor, error)
    );
  }
}

function deleteBaxiosInterceptor(
  axiosInstance: AxiosInstance,
  interceptor: BaxiosInterceptorObject<any>
): void {
  axiosInstance.interceptors[interceptor.type].eject(interceptor.id);
}

export { reqisterBaxiosInterceptor, deleteBaxiosInterceptor };
