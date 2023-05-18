enum BaxiosResponseTypes {
  Buffer = "arrayBuffer",
  BinaryLargeObject = "blob",
  Document = "document",
  JavascriptObjectNotation = "json",
  Text = "text",
}

type BaxiosRequestConfig = {
  /**
   * The format (type) of the response
   */
  responseType?: BaxiosResponseTypes;
  /**
   * Specifies whether the url should include the baseurl or not
   */
  useBaseurl?: boolean;
};

export { BaxiosRequestConfig, BaxiosResponseTypes };
