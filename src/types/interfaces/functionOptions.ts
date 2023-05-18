import { BaxiosRequestConfig } from "..";

type Config = {
  /**
   * The configuration for this request
   */
  config?: BaxiosRequestConfig;
};

//#region BaxiosRequestOptions
type BaxiosRequestOptions = Config & {
  /**
   * The type of the request
   */
  type: RequestTypes | RequestTypesEnum;
  /**
   * The url to request
   */
  url: string;
  /**
   * The data to send (only required if the request type is POST, PUT or PATCH)
   */
  data?: any;
};

type RequestTypes =
  | "POST"
  | "post"
  | "GET"
  | "get"
  | "PUT"
  | "put"
  | "PATCH"
  | "patch"
  | "DELETE"
  | "delete"
  | "HEAD"
  | "head"
  | "OPTIONS"
  | "options"
  | "PURGE"
  | "purge"
  | "LINK"
  | "link"
  | "UNLINK"
  | "link";

enum RequestTypesEnum {
  Post = "POST",
  Get = "GET",
  Put = "PUT",
  Patch = "PATCH",
  Delete = "DELETE",
  Head = "HEAD",
  Options = "OPTIONS",
  Purge = "PURGE",
  Link = "LINK",
  Unlink = "UNLINK",
}
//#endregion BaxiosRequestOptions

//#region Form Options
type BaxiosFormPostOptions = Config & {
  /**
   * The url to post the data to
   */
  url: string;
  /**
   * The form to post the data from
   */
  form: HTMLFormElement;
};

type BaxiosFormPutOptions = Config & {
  /**
   * The url to update the data
   */
  url: string;
  /**
   * The new form to get the data from
   */
  newForm: HTMLFormElement;
};

type BaxiosFormPatchOptions = BaxiosFormPutOptions;
//#endregion Form Options

type DefaultOptions = Config & {
  /**
   *  The url to request
   */
  url: string;
};

type DataOptions = DefaultOptions & {
  /**
   * The data to use
   */
  data: any;
};

type BaxiosHeadOptions = DefaultOptions;

type BaxiosPostOptions = DataOptions;

type BaxiosPutOptions = DataOptions;

type BaxiosPatchOptions = DataOptions;

type BaxiosGetOptions = DefaultOptions;

type BaxiosDeleteOptions = DefaultOptions;

type BaxiosOptionsOptions = DefaultOptions;

type BaxiosUnlinkOptions = DefaultOptions;

type BaxiosLinkOptions = DefaultOptions;

type BaxiosPurgeOptions = DefaultOptions;

export {
  // Request Options
  BaxiosPostOptions,
  BaxiosGetOptions,
  BaxiosPutOptions,
  BaxiosPatchOptions,
  BaxiosDeleteOptions,
  BaxiosRequestOptions,
  BaxiosHeadOptions,
  BaxiosOptionsOptions,
  BaxiosUnlinkOptions,
  BaxiosLinkOptions,
  BaxiosPurgeOptions,
  // Form request Options
  BaxiosFormPostOptions,
  BaxiosFormPutOptions,
  BaxiosFormPatchOptions,
};
