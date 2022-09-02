import React from 'react';
import useProducts from '../../Hooks/useProducts';

const Orders = () => {
    // This useProducts state from custom hook.
    const [products, setProducts] = useProducts();

    return (
        <div>
            <h3>This is orders: {products.length}</h3>
        </div>
    );
};

export default Orders;