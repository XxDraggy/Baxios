import { AxiosInstance } from "axios";
import { BaxiosRequestOptions, BaxiosResponse } from "../types";
import { toRequestConfig } from "./helper";

function baxiosRequest<DataType>(
  axios: AxiosInstance,
  options: BaxiosRequestOptions
): BaxiosResponse<DataType> {
  return axios.request({
    url: options.url,
    method: options.type,
    data: options.data,
    ...toRequestConfig(options.config),
  });
}

export { baxiosRequest };
