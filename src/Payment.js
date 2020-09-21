import React, {useState, useEffect} from 'react';
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import BasketItem from "./BasketItem";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import {useHistory} from "react-router-dom";
import axios from "./axios";
import {db} from "./firebase";

function Payment({}) {
    const [{basket, user}, dispatch] = useStateValue();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState(true);

    const history = useHistory();

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${calculateTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket]);

    console.log("THE SECERT IS>>>>", clientSecret);

    const handleSubmit= async (event) => {
        // do fancy stuff with stripe
        
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method : {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            // payment intent = payment confirmation
            console.log("Payment Intent>>>>", paymentIntent);

            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true);
            setError(null);
            setProcessing(false);
            dispatch({
                type: 'EMPTY_BASKET'
            })
            history.replace("/orders")
        })
        
    }

    
    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    const calculateTotal = (basket) => {
        return basket.reduce((price, item) => item.price + price, 0)
    }

    return (
        <div className="payment">
            <div className="payment__container">
                {/* Address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>23, Anand Nagar, Chitawad Road, Indore</p>
                    </div>
                    <p>
                        {
                            clientSecret
                        }
                    </p>
                </div>

                {/* Review  */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {
                            basket?.map(item=> (
                                <BasketItem id={item.id} title={item.title} image={item.image} rating={item.rating} price={item.price}/>
                            ))
                        }
                    </div>
                </div>

                {/* Payment Method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Paymemt Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment__priceContainer">
                                <CurrencyFormat 
                                    renderText={(value) => (
                                        <h3>Order total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={calculateTotal(basket)} // Part of the homework
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                                {/* <button disabled={processing || disabled || succeeded}><span></span></button> */}
                                <button disabled={processing || disabled || succeeded }>
                                    <span>{processing? <p>Processing</p>: "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment