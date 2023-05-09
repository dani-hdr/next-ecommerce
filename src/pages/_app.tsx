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
// const yekan = localFont({
//   src: [
//     {
//       path: '../../public/fonts/YekanBakh-Fat.ttf',
//       weight: '900',
//       style: 'normal',
//     },
    
//     {
//       path: '../../public/fonts/YekanBakh-Heavy.ttf',
//       weight: '800',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/YekanBakh-Bold.ttf',
//       weight: '700',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/YekanBakh-Medium.ttf',
//       weight: '500',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/YekanBakh-Regular.ttf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/YekanBakh-Light.ttf',
//       weight: '300',
//       style: 'normal',
//     },
   
//   ],
// })
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
        <Component {...pageProps} />{" "}
      </Layout>
    </ThemeProvider>
    </CacheProvider>
  );
}
