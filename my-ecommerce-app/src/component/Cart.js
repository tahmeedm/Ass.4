import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, setCartItems }) => {
    let totalPrice = Math.round(cartItems.reduce((total, item) => total + item.price * item.quantity, 0) * 100) / 100;
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
        } else {
            const updatedCartItems = cartItems.filter(item => item.id !== product.id);
            setCartItems(updatedCartItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        }
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cartItems.map(product => (
                <CartItem key={product.id} product={product} onRemove={() => handleRemove(product)} />
            ))}
            <p>Total Price (in cart): ${totalPrice}</p>
        </div>
    );
};

export default Cart;
