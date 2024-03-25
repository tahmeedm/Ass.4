import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';

const Cart = () => {
    const [cartItems, setCartItems] = useState([localStorage.getItem('cartItems')]);
    let totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (storedCartItems) {
            setCartItems(storedCartItems);
        }
    }, [localStorage.getItem('cartItems')]);

    const handleRemove = (product) => {
        if (product.quantity > 1) {
            const updatedCartItems = cartItems.map(item => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    };
                }
                return item;
            });
            setCartItems(updatedCartItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        } 
        else {
            const updatedCartItems = cartItems.filter(item => item.id !== product.id);
            setCartItems(updatedCartItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        }
        totalPrice = cartItems.reduce((total, item) => total + item.price, 0)
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cartItems.map(product => (
                <CartItem key={product.id} product={product} onRemove={handleRemove} />
            ))}
            <p>Total Price: ${totalPrice}</p>
        </div>
    );
};

export default Cart;