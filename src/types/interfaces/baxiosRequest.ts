import { BaxiosForm } from "../classes";
import { BaxiosResponse } from "./baxiosResponse";
import {
  BaxiosRequestOptions,
  BaxiosPostOptions,
  BaxiosGetOptions,
  BaxiosPutOptions,
  BaxiosPatchOptions,
  BaxiosDeleteOptions,
  BaxiosHeadOptions,
  BaxiosOptionsOptions,
} from "./functionOptions";

type BaxiosRequest = {
  //#region DYNAMIC
  /**
   * Send a request to a url (server, database, etc).
   * @param options The options for this function
   * @returns A {@link BaxiosResponse | baxios response}, which is nearly a axios response
   *
   * Sample:
   * ```javascript
   * function sendProductRequest(type, url, productId) {
   *   const product = getProduct(productId);
   *
   *   baxios.request.dynamic({
   *     type,
   *     url
   *     data: product,
   *   });
   *
   *   console.log(`Request (${type}) successfully send.`)
   * }
   * ```
   */
  (options: BaxiosRequestOptions): BaxiosResponse;
  //#endregion REQUEST

  //#region POST
  /**
   * A {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST | post request} is used to add data to a specific url (server, database, etc).
   * @param options The options for tis function
   * @returns A {@link BaxiosResponse | baxios response}, which is nearly a axios response
   *
   * Sample:
   * ```javascript
   * function addProduct(product) {
   *   baxios.request.post({
   *     url: "/products/add",
   *     data: product
   *   });
   *
   *   console.log(`Product ${product.name} has been successfully added.`)
   * }
   * ```
   */
  post(options: BaxiosPostOptions): BaxiosResponse;
  //#endregion POST

  //#region GET
  /**
   * A {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET | get request} is used to fetch data from a specific url (server, database, etc).
   * @param options The options for this function
   * @returns A {@link BaxiosResponse | baxios response}, which is nearly a axios response
   *
   * Sample:
   * ```javascript
   * function getProduct(productNumber) {
   *   const product = baxios.request.get({
   *     url: `/products/${productNumber}`
   *   });
   *
   *   console.log(`Product: product.`)
   *
   *   return product;
   * }
   *
   * ```
   */
  get(options: BaxiosGetOptions): BaxiosResponse;
  //#endregion GET

  //#region PUT
  /**
   * A {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT | put request} is used to replace data from a specific url (server, database, etc) to the given new Data.
   * @param options The options for this function
   * @returns A {@link BaxiosResponse | baxios response}, which is nearly a axios response
   *
   * Sample:
   * ```javascript
   * function updateProduct(productNumber, newProduct) {
   *   baxios.request.put({
   *     url: `/products/${productNumber}`,
   *     data: newProduct
   *   });
   *
   *   console.log(`Product with number ${productNumber} has been successfully updated.`)
   * }
   * ```
   */
  put(options: BaxiosPutOptions): BaxiosResponse;
  //#endregion PUT

  //#region PATCH
  /**
   * A {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH | patch request} is used to update data from a specific url (server, database, etc) to the given new Data.
   * The difference to the put request is that patch just updates the data that was given.
   * @param options The options for this function
   * @returns A {@link BaxiosResponse | baxios response}, which is nearly a axios response
   *
   * Sample:
   * ```javascript
   * function updateProductName(productNumber, newName) {
   *   baxios.request.put({
   *     url: `/products/${productNumber}`,
   *     data: {
   *       name: newName
   *     }
   *   });
   *
   *   console.log(`Product name has been successfully updated.`)
   * }
   * ```
   */
  patch(options: BaxiosPatchOptions): BaxiosResponse;
  //#endregion PATCH

  //#region DELETE
  /**
   * A {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE | delete request} is used to delete data from a specific url (server, database, etc).
   * @param options The options for this function
   * @returns A {@link BaxiosResponse | baxios response}, which is nearly a axios response
   *
   * Sample:
   * ```javascript
   * function deleteProdut(productNumber) {
   *   axios.delete({
   *     url: `/products/${productNumber}`
   *   });
   *
   *   console.log(`Product with number ${productNumber} has been successfully deleted.`)
   * }
   * ```
   */
  delete(options: BaxiosDeleteOptions): BaxiosResponse;
  //#endregion DELETE

  //#region HEAD
  /**
   * A {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD | head request} is used to get the headers which a {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET | get request} would return
   * @param options The options for this function
   * @returns A {@link BaxiosResponse | baxios response}, which is nearly a axios response
   *
   * Sample:
   * ```javascript
   * function getDownloadSize(url) {
   *   const size = baxios.request.head({
   *     url
   *   }).headers["Content-Size"];
   *
   *   console.log(`${url} has dwonload size ${size}.`);
   *
   *   return size;
   * }
   * ```
   */
  head(options: BaxiosHeadOptions): BaxiosResponse;
  //#endregion HEADER

  //#region OPTIONS
  /**
   * A {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS | options request} is used to get comunication options for the given url
   * @param options The options for this function
   * @returns A {@link BaxiosResponse | baxios response}, which is nearly a axios response
   *
   * Sample:
   * ```javascript
   * function allowsMethod(url, method) {
   *   const allowedMethods = baxios.request.options({
   *     url
   *   }).headers.Allow;
   *   const allows = allowedMethods.filter((val) => val.toLowerCase() == method.toLowerCase())[0];
   *
   *   console.log(`${url} allows ${...allows}.`);
   *
   *   return allows == null ? false : true;
   * }
   * ```
   */
  options(options: BaxiosOptionsOptions): BaxiosResponse;
  //#endregion Options

  // TODO | WRITE DECRIPTION | TODO \\
  //#region PURGE
  purge(options: BaxiosOptionsOptions): BaxiosResponse;
  //#endregion PURGE

  // TODO | WRITE DECRIPTION | TODO \\
  //#region LINK
  link(options: BaxiosOptionsOptions): BaxiosResponse;
  //#endregion LINK

  // TODO | WRITE DECRIPTION | TODO \\
  //#region UNLINK
  unlink(options: BaxiosOptionsOptions): BaxiosResponse;
  //#endregion UNLINK

  form: BaxiosForm;
};

export { BaxiosRequest };
