import { AxiosInstance } from "axios";
import {
  Baxios,
  BaxiosRequest,
  BaxiosRequestOptions,
  BaxiosResponse,
  BaxiosPostOptions,
  BaxiosGetOptions,
  BaxiosPutOptions,
  BaxiosPatchOptions,
  BaxiosDeleteOptions,
  BaxiosHeadOptions,
  BaxiosOptionsOptions,
  BaxiosPurgeOptions,
  BaxiosLinkOptions,
  BaxiosUnlinkOptions,
  BaxiosForm,
} from "../types";
import { baxiosRequest } from "./request";

function assignRequest(
  axiosInstance: AxiosInstance,
  baxiosInstance: Baxios
): BaxiosRequest {
  function dynamicRequest(options: BaxiosRequestOptions): BaxiosResponse {
    return baxiosRequest(axiosInstance, options);
  }

  dynamicRequest.post = (options: BaxiosPostOptions) =>
    baxiosRequest(axiosInstance, {
      type: "POST",
      url: options.url,
      data: options.data,
      config: options.config,
    });
  dynamicRequest.get = (options: BaxiosGetOptions) =>
    baxiosRequest(axiosInstance, {
      type: "GET",
      url: options.url,
      config: options.config,
    });
  dynamicRequest.put = (options: BaxiosPutOptions) =>
    baxiosRequest(axiosInstance, {
      type: "PUT",
      url: options.url,
      data: options.data,
      config: options.config,
    });
  dynamicRequest.patch = (options: BaxiosPatchOptions) =>
    baxiosRequest(axiosInstance, {
      type: "PATCH",
      url: options.url,
      data: options.data,
      config: options.config,
    });
  dynamicRequest.delete = (options: BaxiosDeleteOptions) =>
    baxiosRequest(axiosInstance, {
      type: "DELETE",
      url: options.url,
      config: options.config,
    });
  dynamicRequest.head = (options: BaxiosHeadOptions) =>
    baxiosRequest(axiosInstance, {
      type: "HEAD",
      url: options.url,
      config: options.config,
    });
  dynamicRequest.options = (options: BaxiosOptionsOptions) =>
    baxiosRequest(axiosInstance, {
      type: "OPTIONS",
      url: options.url,
      config: options.config,
    });
  dynamicRequest.purge = (options: BaxiosPurgeOptions) =>
    baxiosRequest(axiosInstance, {
      type: "PURGE",
      url: options.url,
      config: options.config,
    });
  dynamicRequest.link = (options: BaxiosLinkOptions) =>
    baxiosRequest(axiosInstance, {
      type: "LINK",
      url: options.url,
      config: options.config,
    });
  dynamicRequest.unlink = (options: BaxiosUnlinkOptions) =>
    baxiosRequest(axiosInstance, {
      type: "UNLINK",
      url: options.url,
      config: options.config,
    });

  dynamicRequest.form = new BaxiosForm(axiosInstance);

  return dynamicRequest;
}

export { assignRequest };
