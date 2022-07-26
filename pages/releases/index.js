import React, { Fragment } from 'react'
import classes from './releases.module.css'
export default function ReleasePage
() {
  return (
  <Fragment>
    <div>
        <h1>Economic Release Data</h1>
        <h2>{new Date().toLocaleDateString()}</h2>
    </div>

    <div className='releaseContainer'>
    <div className={classes.release}>
      Release Name
    </div>
    <div className={classes.release}>
        Current Release
    </div>
    <div className={classes.release} >
        Prior Release
    </div>
    <div className={classes.release}>
        Two Back Release
    </div>
    </div>

    <div className='releaseContainer'>
    <div className={classes.release}>
      Gross Domestic Product
    </div>
    <div className={classes.release}>
        952.1
    </div>
    <div className={classes.release} >
    952.1
    </div>
    <div className={classes.release}>
    952.1
    </div>
    </div>
  </Fragment>
  )
}
