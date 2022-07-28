import React from 'react';
import './Cart.css';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Cart = ({ cart }) => {
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        console.log(product);
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = (total * 0.1).toFixed(2);
    return (
        <div className='cart'>
            <h5>Our Summary</h5>
            <div className='order-details'>
                <p>Selected items: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h6>Grand Total: $</h6>
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