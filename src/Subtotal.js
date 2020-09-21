import React from 'react';
import "./Subtotal.css";
import {useHistory} from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
    const history = useHistory();
    const [{basket}] = useStateValue();

    const calculateTotal = (basket) => {
        return basket.reduce((price, item) => item.price + price, 0)
    }
    return (
        <div className="subtotal">
            <CurrencyFormat 
            renderText={(value) => (
                <>
                
                <p>
                    Subtotal ({basket.length} items): <strong> {value} </strong> 
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={calculateTotal(basket)} // Part of the homework
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            />
            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
