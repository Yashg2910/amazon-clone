import React from 'react'
import "./BasketItem.css"
import { useStateValue } from "./StateProvider";

function BasketItem({id, image, title, price, rating, hidebutton}) {
    
    const [{}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,
        })
    }
    return (
        <div className="basketitem">
            <img className="basketitem__image" src={image} alt="basket item" />
            <div className="basketitem__info">
                <p className="basketitem__title">{title}</p>
                <p className="basketitem__price">
                    <small></small>
                    <strong>₹{price}</strong>
                </p>
                <p className="basketitem__rating">{Array(rating).fill().map((_, i) => (
                        <span role="img" aria-label="star">⭐</span>
                    ))}
                </p>

                {
                    !hidebutton && (<button onClick={removeFromBasket}>Remove from basket</button>)
                }
                

            </div>
        </div>
    )
}

export default BasketItem
