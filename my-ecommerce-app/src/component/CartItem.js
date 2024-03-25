import React from 'react';

const CartItem = ({ product, onRemove }) => {
    const { image, name, price, quantity } = product;

    const handleRemove = () => {
        onRemove(product);
    };
    const imageStyle = {
        maxWidth: '200px',
        maxHeight: '200px',
    };
    return (
        <div className="cart-item">
            <img src={image} alt={name} style={imageStyle}/>
            <div className="product-details">
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                <p>Total Price: ${price * quantity}</p>
            </div>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default CartItem;