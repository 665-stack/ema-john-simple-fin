import React from 'react';
import './Product.css';

const Product = ({ product }) => {
    const { img, name, price, seller, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-manufacturer'>Manufactuturer: {seller}</p>
                <p className='product-ratings'>Ratings: {ratings} star</p>
            </div>
            <button className='addToCart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;