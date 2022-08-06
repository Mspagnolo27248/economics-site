import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function DataHomePage() {
  const router = useRouter();

  const clickHandler = (event)=>{
    const pathVariable = event.target.id
   
     router.push('/data/'+pathVariable)

  }

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
     
       
      <div className='card-list'>

          <div className='card' onClick={clickHandler} id='Employment'>
              <h2>Employment Data</h2>
              <p>Employment data is a leading indicator of potential economic output.</p>
              <Link href='/data/Employment'>Employment</Link>
          </div>
          
          <div className='card' onClick={clickHandler} id='GDP'>
              <h2>GDP Data</h2>
              <p>GDP is the measure of economic output for the country. </p>
              <Link href='/data/GDP'>GDP</Link>
          </div>

          <div className='card' onClick={clickHandler} id='Inflation'>
              <h2>Inflation Data</h2>
              <p>Inflation is caused by too many dollars chasing to few goods. </p>
              <Link href='/data/Inflation'>Inflation</Link>
          </div>

          <div className='card' onClick={clickHandler} id='Cpi'>
              <h2>CPI Data</h2>
              <p>Consumer price index</p>
              <Link href='/data/cpi'>CPI</Link>
          </div>

          <div className='card' onClick={clickHandler} id='InterestRates'>
              <h2>Intrest Rate Data</h2>
              <p>Interest Rates determine the price borrowers pay, and savers earn. </p>
              <Link href='/data/InterestRates'>Rates </Link>
          </div>


      </div>
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
