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
                <Link href='/data'>Data</Link>
            </li>
            <li className={classes.link}>
                <Link href='/releases'>Releases</Link>
            </li>
            <li className={classes.link}>
                <Link href='/series'>Series</Link>
            </li>
            <li className={classes.link}>
                <Link href='/freddie'>Blog</Link>
            </li>
        </ul>
    </nav>
    </header>
  )
}
