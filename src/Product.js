import React from 'react'
import "./Product.css"
import { useStateValue } from "./StateProvider";

function Product({id, title, image, price, rating}) {

    const [basket, dispatch] = useStateValue();

    console.log("BASKET in product>>>>", basket);

    const addToBasket= () => {
        // dispatch items to the basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            {/* Info */}
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <p>₹</p>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <span role="img" aria-label="star">⭐</span>
                    ))}
                    
                </div>
            </div>
            {/* Price */}
            <img src={image} alt=""/>
            {/* Image */}
            {/* Add to basket */}
            <button className="product__add" onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
