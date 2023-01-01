import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import { SWRConfig } from 'swr'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <SWRConfig
          value={{
            refreshInterval: 60000,
            fetcher: (url: string) => fetch(url).then((res) => res.json()),
          }}
        >
          <Head>
            <meta content="yes" name="apple-mobile-web-app-capable" />
            <meta
              content="minimum-scale=1.0, width=device-width, height=device-height, maximum-scale=1, user-scalable=no"
              name="viewport"
            />
          </Head>
          <Component {...pageProps} />
        </SWRConfig>
      </RecoilRoot>
    </>
  )
}
