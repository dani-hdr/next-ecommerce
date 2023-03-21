import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider,CssBaseline } from "@mui/material";
import theme from "../theme";
import Layout from "@/components/layout";
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

export default function App({ Component, pageProps }: AppProps) {

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });
  return (
    <CacheProvider value={cacheRtl} >
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Layout>
      <Component {...pageProps} />{" "}
      </Layout>
    </ThemeProvider>
    </CacheProvider>
  );
}
