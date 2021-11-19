import React from 'react';

const MyOrders = (props) => {
    const { name, address, email, number } = props.order;
    return (
        <div>
            <div>
                name:{name}
                email:{email}
                number:{number}
            </div>
        </div>
    );
};

export default MyOrders;