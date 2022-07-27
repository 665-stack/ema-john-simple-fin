import React from 'react';
import './Cart.css'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Cart = ({ cart }) => {
    return (
        <div>
            <h5>Our Summary</h5>
            <div className='order-details'>
                <p>Selected items: {cart.length}</p>
                <p>Total Price: $</p>
                <p>Total Shipping Charge: $</p>
                <p>Tax: $</p>
                <h6>Grand Total: $</h6>
            </div>
            <div className='btns'>
                <button className='clear-cart-btn'><p>Clear Cart</p> <FontAwesomeIcon icon={faTrashCan} className='icon'></FontAwesomeIcon> </button>
                <br />
                <button className='review-order-btn'><p>Review Order</p> <FontAwesomeIcon icon={faArrowRight} className="icon"></FontAwesomeIcon></button>
            </div>
        </div >
    );
};

export default Cart;