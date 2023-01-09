import { Global } from "@emotion/react";
import type { AppProps } from 'next/app'
import globalStyles from "../src/commons/styles/global.styles";
import Layout from "../src/components/commons/layout/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}


