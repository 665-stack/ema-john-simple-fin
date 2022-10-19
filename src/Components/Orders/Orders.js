import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import Cart from '../Cart/Cart'
import ReviewItem from '../ReviewItem/ReviewItem'
import { removeFromDb } from "../../utilities/fakedb";
import { useNavigate } from 'react-router-dom';
import './Orders.css'

//import icons
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Orders = () => {
    // This useProducts state from custom hook.
    const [products, setProducts] = useProducts();
    // akhane useCart custom hook ta call korar somoy parameter dite hoice. Karon custom hook make korar somoy oi jaygay akta parameter use kora hoicilo.
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }
    // usenavigate from button
    const navigate = useNavigate()
    const proceedCheckout = () => {
        navigate(`/shipment`)
    }
    return (
        // react e jekhon component er css shobjaygay use kore. jodi eta bondo korte cai taile module css file name use korte hove.
        <div className='shop-container'>
            <div className='review-items-container'>
                {
                    cart.map(product => <ReviewItem
                        product={product} key={product.id}
                        handleRemoveProduct={handleRemoveProduct}></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <div className='btns'>
                        <button className='clear-cart-btn'>Clear Cart  <FontAwesomeIcon icon={faTrashCan} className='icon'></FontAwesomeIcon> </button>
                        <br />
                        <button onClick={proceedCheckout} className='review-order-btn'>Proceed Shipping  <FontAwesomeIcon icon={faArrowRight} className="icon"></FontAwesomeIcon> </button>
                    </div>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;