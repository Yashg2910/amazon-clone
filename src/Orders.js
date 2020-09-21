import React, { useState, useEffect } from 'react'
import {db} from "./firebase";
import Order from "./Order";
import { useStateValue } from "./StateProvider";
import "./Orders.css"
function Orders() {
    const [orders, setOrders] = useState([]);
    const [{basket, user}, dispatch] = useStateValue();

    useEffect(() => {
        if (user){
            console.log("Inside use effect");
            db.collection('users').doc(user?.uid).collection('orders').orderBy('created', 'desc').onSnapshot(snapshot => {
                setOrders(snapshot.docs.map(doc=> ({
                    id: doc.id,
                    data : doc.data(),
                })))
            })
            console.log("Orders>>>", orders)
        }else{
            setOrders([]);
        }
    },[user])
    
    return (
        <div className="orders">
            <h1>Your orders</h1>
            
            <div className="orders__order">
                {
                    orders?.map(order => (
                        <Order order={order} />
                    ))
                }
            </div>
        </div>
    )
}

export default Orders
