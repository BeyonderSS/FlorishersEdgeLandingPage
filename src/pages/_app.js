import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <Head>
      <title>Flourishers Edge</title>
      <meta name="description" content="Flourishers Edge website description." />
      <link rel="icon" href="/favicon.png" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap" />
      <Component {...pageProps} />
    </Head>
  )
}
