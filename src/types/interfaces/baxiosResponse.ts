import {
  RawAxiosResponseHeaders,
  AxiosResponseHeaders,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";

type BaxiosResponseData<DataType> = {
  /**
   * The data from the response
   */
  data: DataType;
  /**
   * The status of the response
   */
  status: BaxiosResponseStatus;
  /**
   * The given headers of the response
   */
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
  /**
   * The config of the request from which this response was created
   */
  config: InternalAxiosRequestConfig;
  /**
   * The axios response
   */
  axiosResponse: AxiosResponse;
  /**
   * The request from which this response was created
   */
  request?: any;
};

type BaxiosResponse<DataType> = Promise<BaxiosResponseData<DataType>>;

type BaxiosResponseStatus = {
  /**
   * The response status code (404, 200, etc)
   */
  code: number;
  /**
   * The name of the response status
   */
  name: string;
};

export { BaxiosResponse, BaxiosResponseStatus };
