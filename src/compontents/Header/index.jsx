import React from "react"
import HeaderCss from './Header.module.css'
import cart from '../../cart.png'
import {Link} from "react-router-dom";

let itemsInCart = 0

export default function Header () {
  return (
  <header className={HeaderCss.container}>
    <Link className={HeaderCss.store_name} to="/">Got Store</Link>
    <div className={HeaderCss.menu_container}>
      <Link className={HeaderCss.cart} to="/cart">
        <img alt="Cart" src={cart}/>
        <span hidden={itemsInCart <= 0}>{itemsInCart}</span>
      </Link>
      
      <menu>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </menu>
    </div>
  </header>
  )
}