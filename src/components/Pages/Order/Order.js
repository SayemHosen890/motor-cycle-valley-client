import React, { useEffect, useState } from 'react';
import MyOrders from '../MyOrder/MyOrders';

const Order = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://afternoon-beyond-26035.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div>
            <h2>{orders.length}</h2>
            {
                orders.map(order => <MyOrders key={order._id} order={order}></MyOrders>)
            }
        </div>
    );
};

export default Order;