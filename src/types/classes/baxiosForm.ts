import { AxiosInstance } from "axios";
import { baxiosRequest } from "../../functions";
import {
  BaxiosFormPostOptions,
  BaxiosResponse,
  BaxiosFormPutOptions,
  BaxiosFormPatchOptions,
} from "../interfaces";

class BaxiosForm {
  constructor(axiosInstance: AxiosInstance) {
    this._axiosInstance = axiosInstance;
  }

  //#region POST
  /**
   * Adds form to a specific url (server, database, etc).
   * @param options The options for this function
   * @returns A baxios response, which is nearly a axios response
   */
  public post<DataType = any>(
    options: BaxiosFormPostOptions
  ): BaxiosResponse<DataType> {
    return baxiosRequest(this._axiosInstance, {
      type: "POST",
      url: options.url,
      data: options.form,
      config: options.config,
    });
  }
  //#endregion POST

  //#region PUT
  /**
   * Replaces data from a specific url (server, database, etc) to the given form data.
   * @param options The options for this function
   * @returns A baxios response, which is nearly a axios response
   */
  public put<DataType = any>(
    options: BaxiosFormPutOptions
  ): BaxiosResponse<DataType> {
    return baxiosRequest<DataType>(this._axiosInstance, {
      type: "POST",
      url: options.url,
      data: options.newForm,
      config: options.config,
    });
  }
  //#endregion PUT

  //#region PATCH
  /**
   * Updates data from a specific url (server, database, etc) to the form data.
   * The difference to the put request is that patch just updates the data that was given.
   * @param options The options for this function
   * @returns A baxios response, which is nearly a axios response
   */
  public patch<DataType = any>(
    options: BaxiosFormPatchOptions
  ): BaxiosResponse<DataType> {
    return baxiosRequest<DataType>(this._axiosInstance, {
      type: "POST",
      url: options.url,
      data: options.newForm,
      config: options.config,
    });
  }
  //#endregion PATCH

  private _axiosInstance: AxiosInstance;
}

export { BaxiosForm };
