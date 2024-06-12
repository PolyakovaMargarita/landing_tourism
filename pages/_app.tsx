import "../src/styles/globals.css";
import { AppProps } from "next/app";
import React from "react";

type MyComponentType = React.FC<AppProps> & {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
};

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout =
    (Component as MyComponentType).getLayout ||
    ((page: React.ReactNode) => page);
  return (
    // <StoreProvider>
    getLayout(<Component {...pageProps} />)
    // {/*</StoreProvider>*/}
  );
}

export default MyApp;
