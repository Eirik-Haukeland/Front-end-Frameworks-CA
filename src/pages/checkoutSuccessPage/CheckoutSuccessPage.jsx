import { useState, useEffect } from "react";
import Button from "../../compontents/Button/Button"
import ProductCard from "../../compontents/ProductCard/ProductCard"
import { getListedProducts } from "../../util/api";
import { getAllItemsFromCart, removeAllItemsFromCart } from "../../util/cartFuncs";
import { Link } from "react-router-dom";
import successCss from "./CheckoutSuccess.module.css"

export default function CheckoutSuccessPage () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getListedProducts(getAllItemsFromCart()).then(setProducts)
    removeAllItemsFromCart()
  }, [])

  return (
    <div className={successCss.container}>
      <div className={successCss.thankYouAria}>
        <h1>Purhase Complete</h1>
        <span>Thank you For Your Purhase</span>
        <Link to="/" style={{textDecoration: "none"}}>
          <Button>Back to Store</Button>
        </Link>
      </div>
      <section className={successCss.purchaseSection}>
        <h2>Your Purchase:</h2>
        <div>
          {
            products.map(product => ProductCard(product))
          }
        </div>
      </section>
    </div>
  )
}