import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import Cart from '../Cart/Cart'
import ReviewItem from '../ReviewItem/ReviewItem'

const Orders = () => {
    // This useProducts state from custom hook.
    const [products, setProducts] = useProducts();
    // akhane useCart custom hook ta call korar somoy parameter dite hoice. Karon custom hook make korar somoy oi jaygay akta parameter use kora hoicilo.
    const [cart, setCart] = useCart(products);
    return (
        // react e jekhon component er css shobjaygay use kore. jodi eta bondo korte cai taile module css file name use korte hove.
        <div className='shop-container'>
            <div className='review-items-container'>
                {
                    cart.map(product => <ReviewItem product={product} key={product.id}></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;