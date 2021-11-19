import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [bike, setBike] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setBike(data))
    }, [])

    return (
        <div>
            <h2>this is products :{bike.length}</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    bike.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;