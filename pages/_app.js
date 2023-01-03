import '../styles/globals.css'
import Layout from '../components/layout-comps/Layout'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return (
    <>

  <Head>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;900&display=swap" rel="stylesheet"/>
  </Head>
  <Layout>
    <Component {...pageProps} />
  </Layout>

  </>
  
  )
}
