import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';

const Orders = () => {
    // This useProducts state from custom hook.
    const [products, setProducts] = useProducts();
    // akhane useCart custom hook ta call korar somoy parameter dite hoice. Karon custom hook make korar somoy oi jaygay akta parameter use kora hoicilo.
    const [cart, setCart] = useCart(products);
    return (
        <div>
            <h3>This is orders: {products.length}</h3>
            <p>Cart has: {cart.length}</p>
        </div>
    );
};

export default Orders;