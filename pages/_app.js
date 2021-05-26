import '../styles/global.css'
import Head from 'next/head'
import Layout from '../components/layout'
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
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  )
}
