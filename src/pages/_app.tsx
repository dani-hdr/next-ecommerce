import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider,CssBaseline, LinearProgress } from "@mui/material";
import theme from "../theme";
import Layout from "@/components/layout";
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import localFont from 'next/font/local'
import 'aos/dist/aos.css';
import useLoading from "@/hooks/useLoading";
const yekan = localFont({
  src: [
    {
      path: '../../public/fonts/YekanBakh-Fat.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/YekanBakh-Heavy.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/YekanBakh-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/YekanBakh-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/YekanBakh-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/YekanBakh-Light.woff2',
      weight: '300',
      style: 'normal',
    },
   
  ],
})
export default function App({ Component, pageProps }: AppProps) {
  const isLoading = useLoading();
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });
  return (
    <CacheProvider  value={cacheRtl} >
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      {isLoading && <LinearProgress sx={{position:'sticky',top:0,left:0,width:'100%'}} />}
      <Layout>
      <style jsx global>{`
        html {
          font-family: ${yekan.style.fontFamily};
        }
      `}</style>   
        <Component {...pageProps} />{" "}
      </Layout>
    </ThemeProvider>
    </CacheProvider>
  );
}
