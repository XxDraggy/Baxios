import {
  Method,
  AxiosRequestTransformer,
  AxiosResponseTransformer,
  RawAxiosRequestHeaders,
  AxiosHeaders,
  ParamsSerializerOptions,
  CustomParamsSerializer,
  AxiosBasicCredentials,
  responseEncoding,
  AxiosProgressEvent,
  AxiosProxyConfig,
  CancelToken,
  TransitionalOptions,
  GenericAbortSignal,
  FormSerializerOptions,
} from "axios";

enum Methods {
  Get = "get",
}

type ContentType =
  | SaxiosHeaderValue
  | "text/html"
  | "text/plain"
  | "multipart/form-data"
  | "application/json"
  | "application/x-www-form-urlencoded"
  | "application/octet-stream";

type SaxiosHeaderValue = string | string[] | number | boolean | null;

type DefaultHeaders = {
  Accept?: SaxiosHeaderValue;
  "Content-Length"?: SaxiosHeaderValue;
  "User-Agent"?: SaxiosHeaderValue;
  "Content-Encoding"?: SaxiosHeaderValue;
  Authorization?: SaxiosHeaderValue;
  "Content-Type"?: ContentType;
};

type MethodHeaders = {
  [Key in Method as Lowercase<Key>]: SaxiosHeaderValue;
};

type AnyHeader = {
  [key: string]: SaxiosHeaderValue;
};

type SaxiosRequestConfig<DataType> = {
  url?: string;
  method?: Method | string;
  timeout?: number; // Milliseconds
  data?: DataType;
  headers?: DefaultHeaders & MethodHeaders & AnyHeader;
};

export interface AxiosRequestConfig<D = any> {
  transformRequest?: AxiosRequestTransformer | AxiosRequestTransformer[];
  transformResponse?: AxiosResponseTransformer | AxiosResponseTransformer[];
  params?: any;
  paramsSerializer?: ParamsSerializerOptions | CustomParamsSerializer;
  timeoutErrorMessage?: string;
  withCredentials?: boolean;
  adapter?: AxiosAdapterConfig | AxiosAdapterConfig[];
  auth?: AxiosBasicCredentials;
  responseType?: ResponseType;
  responseEncoding?: responseEncoding | string;
  xsrfCookieName?: string;
  xsrfHeaderName?: string;
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void;
  onDownloadProgress?: (progressEvent: AxiosProgressEvent) => void;
  maxContentLength?: number;
  validateStatus?: ((status: number) => boolean) | null;
  maxBodyLength?: number;
  maxRedirects?: number;
  maxRate?: number | [MaxUploadRate, MaxDownloadRate];
  beforeRedirect?: (
    options: Record<string, any>,
    responseDetails: { headers: Record<string, string> }
  ) => void;
  socketPath?: string | null;
  transport?: any;
  httpAgent?: any;
  httpsAgent?: any;
  proxy?: AxiosProxyConfig | false;
  cancelToken?: CancelToken;
  decompress?: boolean;
  transitional?: TransitionalOptions;
  signal?: GenericAbortSignal;
  insecureHTTPParser?: boolean;
  env?: {
    FormData?: new (...args: any[]) => object;
  };
  formSerializer?: FormSerializerOptions;
  family?: 4 | 6 | undefined;
  lookup?:
    | ((
        hostname: string,
        options: object,
        cb: (err: Error | null, address: string, family: number) => void
      ) => void)
    | ((
        hostname: string,
        options: object
      ) => Promise<[address: string, family: number] | string>);
}
