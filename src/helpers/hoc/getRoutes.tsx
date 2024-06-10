import { isNotUndefined } from "./isNotUndefined";

export const getRoutes = () => {
  if (isNotUndefined) {
    return window.location.pathname;
  }
};
