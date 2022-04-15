import '../styles/globals.sass'
import { AppProps } from 'next/app'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from 'next/head'
import Hero from '../components/Hero/Hero'
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta name="theme-color" content="#1572A1" />
      </Head>
      <Hero />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp