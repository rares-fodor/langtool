import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

/* Font */
import { Roboto_Slab } from 'next/font/google'
const globalFont = Roboto_Slab({ subsets: ['latin'] })


export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
          fontFamily: globalFont.style.fontFamily,
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
