import '../styles/globals.css'
import Layout from '../components/layout-comps/Layout'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return (
    <>

  <Head>
  
  </Head>
  <Layout>
    <Component {...pageProps} />
  </Layout>

  </>
  
  )
}
