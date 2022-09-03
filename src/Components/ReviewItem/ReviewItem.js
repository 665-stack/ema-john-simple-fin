import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'
const ReviewItem = ({ product, handleRemoveProduct }) => {
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
                    <p>Price: <span className='org-clr-priceName'>${price}</span></p>
                    <p>Shipping: <span> ${shipping}</span></p>
                    <p>Quantity: <span> {quantity}</span></p>
                </div>

                <div className="delete-container">
                    <button onClick={() => { handleRemoveProduct(product) }} className='delete-button'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>

            </div>

        </div>
    );
};

export default ReviewItem;