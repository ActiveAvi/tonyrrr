import '../theme/global.css'
import Head from 'next/head'
import React from 'react'

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>TonyRrr's Flagship</title>
        <meta
          name='description'
          content={`TonyRrr's flagship be docked here`}
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  )
}
