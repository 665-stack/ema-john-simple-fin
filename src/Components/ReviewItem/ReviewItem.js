import React from 'react';
import './ReviewItem.css'
const ReviewItem = ({ product }) => {
    const { img, name, price, shipping, quantity } = product;
    return (
        <div className='review-item'>

            <div>
                <img src={img} alt="" />
            </div>

            <div className="review-item-details-container">

                <div className="review-item-details">
                    {/* akhaner name ta onk boro hoye gece tai ternary operator diye name ta slice kora hoice */}
                    <p className='product-name' title={name}>{name.length > 20 ? name.slice(0, 20) + '...' : name}</p>
                    <p>Price: <span className='org-clr-priceName'>{price}</span></p>
                    <p>Shipping: <span> {shipping}</span></p>
                    <p>Quantity: <span> {quantity}</span></p>
                </div>

                <div className="delete-container">
                    <button>Delete</button>
                </div>

            </div>

        </div>
    );
};

export default ReviewItem;