import React, { Fragment } from 'react'
import MainHeader from './Main-Header'

export  const Layout = (props) => {
  return (
    <Fragment>
        <MainHeader/>
        <main>{props.children}</main>
    </Fragment>
  )
}
