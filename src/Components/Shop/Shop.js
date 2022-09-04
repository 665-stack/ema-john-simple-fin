import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import { addToDb, getStoredcart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
//import icons
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Shop = () => {
    // This useProducts() state from custom hook
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);


    useEffect(() => {
        const storedCart = getStoredcart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart);
    }, [products]);

    const handleAddToCart = selectedProduct => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    // useNavigate from button
    const navigate = useNavigate()
    const reviewOrder = () => {
        navigate('/orders')
    }
    return (
        <div className='shop-container'>
            {/* product section */}
            <div className='products-container'>
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            {/* cart section */}
            <div className='cart-container'>
                <Cart cart={cart} className='btns-2'>
                    <div className="btns">
                        <button className='clear-cart-btn'>Clear Cart  <FontAwesomeIcon icon={faTrashCan} className='icon'></FontAwesomeIcon> </button>
                        <br />
                        <button onClick={reviewOrder} className='review-order-btn'>Review Order  <FontAwesomeIcon icon={faArrowRight} className="icon"></FontAwesomeIcon> </button>
                    </div>
                </Cart>
            </div>
        </div >
    );
};

export default Shop;