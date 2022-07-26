import React from 'react'
import Link from 'next/link'
import classes from './main-header.module.css'
export default function MainHeader() {
  return (
  
    <header className={classes.header}>
    <div className={classes.logo}>
        <Link href='/'>Home</Link>
    </div>

    <nav className={classes.navigation}>
        <ul>
            <li className={classes.link}>
                <Link href='/data/Employment'>Employment</Link>
            </li>
            <li className={classes.link}>
                <Link href='/data/Inflation'>Inflation</Link>
            </li>
            <li className={classes.link}>
                <Link href='/data/GDP'>GDP</Link>
            </li>
            <li className={classes.link}>
                <Link href='/data/InterestRates'>Rates</Link>
            </li>
        </ul>
    </nav>
    </header>
  )
}
