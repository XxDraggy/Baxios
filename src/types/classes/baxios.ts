import axios, { AxiosInstance } from "axios";
import {
  BaxiosRequest,
  BaxiosDefaultOptions,
  BaxiosOptions,
  BaxiosInterceptors,
} from "..";
import { assignRequest, toBaxiosResponse } from "../../functions";
import { AxiosResponse } from "axios";

class Baxios {
  constructor(options: BaxiosOptions) {
    this._axiosInstance = axios.create();
    this.defaults = options.defaults;

    this._axiosInstance.interceptors.response.use(
      (res) => toBaxiosResponse(res) as unknown as AxiosResponse
    );

    assignRequest(this._axiosInstance, this);
  }

  public request: BaxiosRequest;
  public defaults: BaxiosDefaultOptions;
  public interceptors: BaxiosInterceptors;

  private _axiosInstance: AxiosInstance;
}

export { Baxios };
