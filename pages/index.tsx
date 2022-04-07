import Head from 'next/head'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.sass'

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="theme-color" content="#1572A1" />
      </Head>
      <Hero />
    </div>
  )
}
