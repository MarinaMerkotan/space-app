import '@/styles/globals.scss'
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <meta name="description" content="Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/space.svg" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  )
}

export default App;