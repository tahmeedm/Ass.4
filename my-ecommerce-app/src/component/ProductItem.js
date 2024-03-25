import React, { useState, useEffect } from 'react';

const ProductItem = ({ product }) => {
    const [showDescription, setShowDescription] = useState(false);

    const handleMouseEnter = () => {
        setShowDescription(true);
    };

    const handleMouseLeave = () => {
        setShowDescription(false);
    };

    const handleAddToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const existingItem = cartItems.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push({ ...product, quantity: 1 });
        }
        
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };

    const imageStyle = {
        maxWidth: '200px',
        maxHeight: '200px',
    };

    return (
        <div className="product-item">
            <img src={product.image} alt={product.name} style={imageStyle}/>
            <h3 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {product.name}
            </h3>
            <p>${product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            {showDescription && <p>{product.description}</p>}
        </div>
    );
};

export default ProductItem;