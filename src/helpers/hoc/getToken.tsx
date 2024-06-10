import { TOKEN_LOCAL } from "../constants/constantsLocal";
import { isNotUndefined } from "./isNotUndefined";

export const getToken = () => {
  return isNotUndefined && localStorage.getItem(TOKEN_LOCAL) ? localStorage.getItem(TOKEN_LOCAL) : "";
};
