import dispalyPriceCss from "./DisplayPrice.module.css"

export default function DisplayPrice ({discountedPrice, price}) {
	if (discountedPrice !== price) {
		const discountPercentage = Math.floor((price - discountedPrice) / price * 100);

		return (
		  <div className={dispalyPriceCss.price}>
				<span className={dispalyPriceCss.before}>Before: <span>{price}kr</span></span>
				<span className={`${dispalyPriceCss.discounted} ${dispalyPriceCss.mainPrice}`}>{discountedPrice}kr ({discountPercentage}% Off)</span>
			</div>
		)
	}

	return (
	  <div className={dispalyPriceCss.price}>
			<span className={dispalyPriceCss.mainPrice}>{price}kr</span>
		</div>
	)
}
