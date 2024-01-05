import React from "react"
import FooterCss from "./Footer.module.css"
import {Link} from "react-router-dom";

export default function Footer () {
  return (
    <footer className={FooterCss.container}>
      <menu className={FooterCss.menu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </menu>
      <a href="https://www.flaticon.com/free-icons/shopping-cart_2838838?term=shopping+cart&page=1&position=3&origin=tag&related_id=2838838" title="cart icons">Cart created by Maxim Basinski - Flaticon</a>
      <span>Copyright © 2023 Got Store</span>
    </footer>
  )
}


