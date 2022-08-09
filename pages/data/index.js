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

          <Link href='/data/Employment'>
          <a>
          <div className='card' onClick={clickHandler} id='Employment'>
              <h2>Employment Data</h2>
              <p>Employment data is a leading indicator of potential economic output.</p>           
          </div>
          </a>    
          </Link>
          

          <Link href='/data/GDP'>
          <a>
          <div className='card' onClick={clickHandler} id='GDP'>
              <h2>GDP Data</h2>
              <p>GDP is the measure of economic output for the country. </p>            
          </div>
          </a>        
          </Link>

          <Link href='/data/Inflation'>
          <a>
          <div className='card' onClick={clickHandler} id='Inflation'>
              <h2>Inflation Data</h2>
              <p>Inflation is caused by too many dollars chasing to few goods. </p>              
          </div>
          </a>         
          </Link>

          <Link href='/data/cpi'>
          <a>
          <div className='card' onClick={clickHandler} id='Cpi'>
              <h2>CPI Data</h2>
              <p>Consumer price index</p>             
          </div>
          </a>        
          </Link>

          <Link href='/data/InterestRates'>
          <a>
          <div className='card' onClick={clickHandler} id='InterestRates'>
              <h2>Interest Rate Data</h2>
              <p>Interest Rates determine the price borrowers pay, and savers earn. </p>           
          </div>
          </a>         
           </Link>


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
