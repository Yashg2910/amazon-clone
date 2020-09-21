import React from 'react'
import moment from "moment"
import "./Order.css"
import BasketItem from "./BasketItem";

function Order({order}) {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p>
                <small>{order.id}</small>
            </p>
            {
                order.data.basket?.map( item => (
                    <BasketItem id={item.id} title={item.title} image={item.image} rating={item.rating} price={item.price} hidebutton/>
                ))
            }
        </div>
    )
}

export default Order
