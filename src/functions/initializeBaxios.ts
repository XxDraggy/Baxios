import { BaxiosOptions, Baxios } from "../types";

function initializeBaxios(options: BaxiosOptions): Baxios {
  return new Baxios(options);
}

export { initializeBaxios };
