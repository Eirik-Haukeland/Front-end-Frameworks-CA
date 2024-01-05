import React from "react"
import Header from "../Header/index.jsx"
import Footer from "../Footer/index.jsx"
import LayoutCss from "./Layout.module.css"

export default function Layout ({ children }) {
  return (
    <>
      <Header></Header>
      <main className={LayoutCss.mainDef}>{ children }</main>
      <Footer></Footer>
    </>
  )
}