import React from 'react';

const MyOrders = (props) => {
    const { name, address, email, number } = props.order;
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default MyOrders;