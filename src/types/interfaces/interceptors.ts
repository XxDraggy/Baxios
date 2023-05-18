import { BaxiosRequestConfig } from "./baxiosRequestConfig";
import { BaxiosResponse } from "./baxiosResponse";

type BaxiosBeforeInterceptor = BaxiosInterceptoreManager<BaxiosRequestConfig>;
type BaxiosAfterInterceptor<DataType> = BaxiosInterceptoreManager<
  BaxiosResponse<DataType>
>;

type BaxiosInterceptoreManager<Value> = {
  add: (options: BaxiosInterceptorObject<Value>) => number;
  remove: (
    options: BaxiosInterceptorRemoveOptions
  ) => BaxiosInterceptorObject<Value>;
  get: () => BaxiosInterceptorObject<Value>[];
};

type BaxiosInterceptorRemoveOptions = {
  id: number;
};

type BaxiosInterceptorFunction<Value> = (
  options: BaxiosInterceptorFunctions<Value>
) => string;

type BaxiosInterceptorObject<Value> = {
  success: (value: Value) => Value;
  error?: (error: any) => any | null;
  id: number;
  type: "request" | "response";
};

type BaxiosInterceptorData<Value> = {
  success: (value: Value) => Value;
  error?: (error: any) => any | null;
  type: "request" | "response";
};

type BaxiosInterceptorFunctions<Value> = {
  success: (value: Value) => Value;
  error?: (error: any) => any | null;
};

export {
  BaxiosBeforeInterceptor,
  BaxiosAfterInterceptor,
  BaxiosInterceptoreManager,
  BaxiosInterceptorFunction,
  BaxiosInterceptorObject,
  BaxiosInterceptorRemoveOptions,
  BaxiosInterceptorData,
  BaxiosInterceptorFunctions,
};
