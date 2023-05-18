import { AxiosInstance } from "axios";
import {
  reqisterBaxiosInterceptor,
  deleteBaxiosInterceptor,
} from "../../functions";
import {
  BaxiosBeforeInterceptor,
  BaxiosAfterInterceptor,
  BaxiosInterceptorObject,
  BaxiosRequestConfig,
  BaxiosResponse,
} from "../interfaces";

class BaxiosInterceptors {
  constructor(axiosInstance: AxiosInstance) {
    this._axiosInstance = axiosInstance;
  }

  public beforeRequest: BaxiosBeforeInterceptor = {
    add: (options) => {
      const id: number = reqisterBaxiosInterceptor(this._axiosInstance, {
        success: options.success,
        error: options.error,
        type: "response",
      });

      this._beforeInterceptors.push({
        success: options.success,
        error: options.error,
        id: id,
        type: "response",
      });

      return id;
    },
    remove: (options) => {
      const interceptoreToDelete = this._beforeInterceptors.filter(
        (interceptore) => interceptore.id == options.id
      )[0];

      this._beforeInterceptors = this._beforeInterceptors.filter(
        (interceptore) => interceptore !== interceptoreToDelete
      );

      deleteBaxiosInterceptor(this._axiosInstance, interceptoreToDelete);

      return interceptoreToDelete;
    },
    get: () => this._beforeInterceptors,
  };

  public afterRequest: BaxiosAfterInterceptor<any> = {
    add: (options) => {
      const id: number = reqisterBaxiosInterceptor(this._axiosInstance, {
        success: options.success,
        error: options.error,
        type: "request",
      });

      this._afterInterceptors.push({
        success: options.success,
        error: options.error,
        id,
        type: "request",
      });

      return id;
    },
    remove: (options) => {
      const interceptoreToDelete = this._afterInterceptors.filter(
        (interceptore) => interceptore.id == options.id
      )[0];

      this._afterInterceptors = this._afterInterceptors.filter(
        (interceptore) => interceptore !== interceptoreToDelete
      );

      deleteBaxiosInterceptor(this._axiosInstance, interceptoreToDelete);

      return interceptoreToDelete;
    },
    get: () => this._afterInterceptors,
  };

  private _beforeInterceptors: BaxiosInterceptorObject<BaxiosRequestConfig>[] =
    [];
  private _afterInterceptors: BaxiosInterceptorObject<BaxiosResponse<any>>[] =
    [];

  private _axiosInstance: AxiosInstance;
}

export { BaxiosInterceptors };
