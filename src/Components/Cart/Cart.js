import React from 'react';

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
                <button className='clear-cart-btn'><p>Clear Cart</p></button>
                <br />
                <button className='review-order-btn'><p>Review Order</p></button>
            </div>
        </div>
    );
};

export default Cart;