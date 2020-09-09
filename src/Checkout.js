import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal.js"

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" alt="ad banner" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg"/>
                <h2 className="checkout__title">Your Shopping Basket</h2>
                {/* basket item */}
                {/* basket item */}
                {/* basket item */}
                {/* basket item */}
                {/* basket item */}
                {/* basket item */}
                

            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>  
        </div>
    )
}


export default Checkout