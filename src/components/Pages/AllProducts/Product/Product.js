import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    const { _id, name, description, price, image } = props.product;
    return (
        <div>
            <div className="col image">
                <div className="card h-100">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">{price}</p>
                    </div>
                    <div className="button">
                        <Link to="purchaseitem">
                            <button>Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;