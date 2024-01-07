import {Link} from "react-router-dom";
import cardCss from "./ProductCard.module.css"
import Button from "../Button/Button.jsx"

export default function ProductCard (props) {
  const {id, title, imageUrl, price, discountedPrice} = props

  return (
    <Link className={cardCss.card_container} key={id} to={`product/${id}`}>
      <img className={cardCss.image} src={imageUrl} alt="" />
      <span className={cardCss.title}>{title}</span>
      {discountedPrice !== price
        ? <span className={cardCss.price} data-discounted="true">{discountedPrice} Kr</span>
        : <span className={cardCss.price}>{price} Kr</span>
      }
      <Button className={cardCss.btn}>View Product</Button>
    </Link>
    )
}