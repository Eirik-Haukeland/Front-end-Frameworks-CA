import {useEffect, useMemo, useRef, useState} from "react";
import {getAllProducts} from "../../util/api.js";
import ProductCard from "../../compontents/ProductCard/ProductCard.jsx";
import homeCss from "./Home.module.css"

export default function Home () {
  const [productsFetch, setProductsFetch] = useState([])
  const [filterText, setFilterText] = useState('')

  useEffect(() => {
    getAllProducts().then(setProductsFetch)
  }, []);

  const filteredProducts = useMemo(() => productsFetch
    .filter(product =>
      product.title.toLowerCase()
        .includes(filterText.toLowerCase())), [productsFetch, filterText])

  return (
    <section id="cards" className={homeCss.card_list}>
      <h2 className="sr-only">products list</h2>
      <search className={homeCss.search}>
        <input type="search" onChange={({target: { value}}) => setFilterText(value)} placeholder="filter by product name" autoComplete="off"/>
      </search>
      {
        filteredProducts.map(product => ProductCard(product))
      }
    </section>
  )
}