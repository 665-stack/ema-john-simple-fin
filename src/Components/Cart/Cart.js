import React from 'react';
import './Cart.css';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        console.log(product);
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h5>Our Summary</h5>
            <div className='order-details'>
                <p>Selected items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
            </div>
            <div className='btns'>
                <button className='clear-cart-btn'><p>Clear Cart  <FontAwesomeIcon icon={faTrashCan} className='icon'></FontAwesomeIcon></p> </button>
                <br />
                <button className='review-order-btn'><p>Review Order  <FontAwesomeIcon icon={faArrowRight} className="icon"></FontAwesomeIcon></p> </button>
            </div>
        </div >
    );
};

export default Cart;