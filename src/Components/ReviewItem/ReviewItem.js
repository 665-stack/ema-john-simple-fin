import React from 'react';

const ReviewItem = ({ product }) => {
    const { img, name, price, shipping, quantity } = product;
    return (
        <div>
            <h3>{name}</h3>

        </div>
    );
};

export default ReviewItem;