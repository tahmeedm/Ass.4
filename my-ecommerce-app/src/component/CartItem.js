import React from 'react';

const CartItem = ({ product, onRemove }) => {
    const { image, name, price, quantity } = product;

    const handleRemove = () => {
        onRemove(product);
    };

    return (
        <div className="cart-item">
            <img src={image} alt={name} style={{height:"200px"}}/>
            <div className="product-details">
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                <p>Total Price: ${Math.round(price * quantity * 100) / 100}</p>
            </div>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default CartItem;