import React from "react"
import Header from "./header"
import Footer from "./footer"

import 'normalize.css'
import "bootstrap-css-only"
import "../css/main.scss"

const Layout = ({ children }) => {

  return (
    <>
        <div id="page-container">
        <Header/>
          <div id="content-wrap">
            {children}
          </div>
          <Footer/>
        </div>
    </>
  )
}

export default Layout
