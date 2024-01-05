import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getSingleProduct} from "../../util/api.js";
import DisplayPrice from "../../compontents/DisplayPrice/DisplayPrice.jsx"
import productCss from "./Product.module.css";
import Button from "../../compontents/Button/Button.jsx";
import RevueCard from "../../compontents/RevueCard/RevueCard.jsx";
import { addItemsToCart, isItemInCart } from "../../util/cartFuncs.js";

export default function Product () {
	const {productId} = useParams()

	let [product, setProduct] = useState({})
	let [isInCart, setIsInCart] = useState(false)
	useEffect(() => {
		getSingleProduct(productId).then(setProduct)
		setIsInCart(isItemInCart(productId))
	}, []);
	

	return (
		<>
			<seciton className={productCss.productSection}>
				<img className={productCss.img} src={product.imageUrl} alt="" />
				<div className={productCss.info}>
					<div className={productCss.title_and_description}>
						<h1 className={productCss.title}>{product.title}</h1>
						<p className={productCss.description}>{product.description}</p>
					</div>
					<div className={productCss.price_and_btn}>
						<DisplayPrice price={product.price} discountedPrice={product.discountedPrice} />
						<Button onEventFunction={() => {addItemsToCart(product.id); setIsInCart(isItemInCart(product.id));}} disabled={isInCart}>Add To Cart</Button>
					</div>
				</div>
			</seciton>
			<section className={productCss.RevueSection}>
				<h2>{product.rating}/5 ⭐</h2>
				{
					product.reviews?.map(review => RevueCard(review))
				}
			</section>
		</>
	)
}
