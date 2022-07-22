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
            <li>
                <Link href='/data'>Link1</Link>
            </li>
            <li>
                <Link href='#'>Link1</Link>
            </li>
            <li>
                <Link href='#'>Link1</Link>
            </li>
        </ul>
    </nav>
    </header>
  )
}
