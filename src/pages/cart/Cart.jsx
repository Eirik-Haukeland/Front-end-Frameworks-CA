import { useEffect, useState } from "react"

import { getAllItemsFromCart } from "../../util/cartFuncs"
import cartCss from "./Cart.module.css"
import { getListedProducts } from "../../util/api"
import Button from "../../compontents/Button/Button"
import DisplayPrice from "../../compontents/DisplayPrice/DisplayPrice"


export default function Cart () {
  const [itemIds, setItemIds] = useState([])
  useEffect(() => {  
    setItemIds(getAllItemsFromCart())
  }, [])
  
  const [itemsInCart, setItemsInCart] = useState()
  useEffect(() => {
    if (itemIds.length >= 1) {
      getListedProducts(itemIds).then(setItemsInCart)
    }
  }, [itemIds])

  return (
    <section className="cartCss.cartSection">
      <h1>Shopping Cart</h1>
      {
        itemsInCart?.map(item => 
          <div key={item.id}>
            <img src={item.imageUrl} alt=""/>
            <h2>item.title</h2>
            <Button>remove</Button>
            <DisplayPrice price={item.price} discountedPrice={item.discountedPrice} />
          </div>)
      }
    </section>
  )
}





