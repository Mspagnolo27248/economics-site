import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()

  const clickHandler = (event)=>{
    const pathVariable = event.target.id
   
     router.push('/'+pathVariable)

  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Economic Site</title>
        <meta name="description" content="federal reserve, EIA, BLS data economic indicators" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <h1>Welcome to ECON 101 </h1>
       <p>Website with the latest economic releases and historical data.</p>

      <div className='card-list'>

        <div className='card' onClick={clickHandler} id='data'>
          <h2>Data Center</h2>
          <p>Access charts that analyis sectors of the economy</p>
          <Link href='/data'>Data Center</Link>
        </div>

        <div className='card' onClick={clickHandler} id='releases'>
          <h2>FRED Releases</h2>
          <p>Review the latest economic release data</p>
          <Link href='/release'>Releases</Link>
        </div>

        <div className='card' onClick={clickHandler} id='series'>
          <h2>FRED series</h2>
          <p>Select a FRED economic serires to review the historical data and chart.</p>
          <Link href='/series'>Series</Link>
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
