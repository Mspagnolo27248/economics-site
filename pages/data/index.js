import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function DataHomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Economic Site</title>
        <meta name="description" content="federal reserve, EIA, BLS data economic indicators" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <h1>Welcome to Data Center </h1>
       <p>Links to data specific to various markets sectors.</p>
       <Link href='/data/Employment'>Employment</Link>
       
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
