import { useEffect, useState } from "react"

import { getAllItemsFromCart, removeItemFromCart } from "../../util/cartFuncs"
import cartCss from "./Cart.module.css"
import { getListedProducts } from "../../util/api"
import Button from "../../compontents/Button/Button"
import DisplayPrice from "../../compontents/DisplayPrice/DisplayPrice"
import { type } from "@testing-library/user-event/dist/type"
import Product from "../product/Product"
import { Link } from "react-router-dom"


export default function Cart () {
  const [itemIds, setItemIds] = useState([])
  useEffect(() => {  
    setItemIds(getAllItemsFromCart())
  }, [])
  
  const [itemsInCart, setItemsInCart] = useState()
  const [totalPrice, setTotalPrice] = useState()
  useEffect(() => {
    if (itemIds.length >= 1) {

      getListedProducts(itemIds)
      .then(cartItems => {
        setItemsInCart(cartItems)
        setTotalPrice(cartItems.reduce((total, {price, discountedPrice}) => {

          const workingTotal = price > discountedPrice 
            ? total + discountedPrice 
            : total + price;
          const [wholeNumbers , dessimals] = workingTotal.toString().split('.');

          let twoNumberdDessimal;
          if (dessimals?.length > 2) {
            let [firstDessimalPlace, secondDessimalPlace, thirdDessimalPlace] = dessimals.split("").slice(0, 3);

            secondDessimalPlace = parseInt(thirdDessimalPlace) >= 5 ? (parseInt(secondDessimalPlace) + 1).toString() : secondDessimalPlace;

            twoNumberdDessimal = [firstDessimalPlace, secondDessimalPlace].join("");
          } else {
            twoNumberdDessimal = (dessimals + "00")
              .split("")
              .slice(0,2)
              .join("")
          }

          return parseFloat([wholeNumbers, twoNumberdDessimal].join("."));
        }, 0))
      })
    }
  }, [itemIds])



  return (
    <section className={cartCss.cartSection}>
      <h1>Shopping Cart</h1>
      {
        itemsInCart?.map(item => 
          <div key={item.id} className={cartCss.cartItem}>
            <img src={item.imageUrl} alt="" className={cartCss.cartItemImg}/>
            <h2 className={cartCss.cartItemTitle}>{item.title}</h2>
            <Button className={cartCss.cartItemBtn} smallBtn={true} secondary={true} onEventFunction={() => removeItemFromCart(item.id) || setItemIds(getAllItemsFromCart())}>remove</Button>
            <DisplayPrice price={item.price} discountedPrice={item.discountedPrice} className={cartCss.cartItemPrice} />
          </div>)
      }
      <div className={cartCss.cartTotal}>
        <h2>Total</h2>
        <DisplayPrice price={totalPrice}/>
      </div>
      <div className={cartCss.cartCheckout}>
        <Link to="/" className={cartCss.toHome} style={{textDecoration: "none"}}>
          <Button className={cartCss.cartItemBtn} secondary={true}>Back</Button>
        </Link>
        <Link to="/checkout/success" className={cartCss.toCheckout} style={{textDecoration: "none"}}>
          <Button className={cartCss.cartItemBtn}>Complete</Button>
        </Link>
      </div>
    </section>
  )
}





