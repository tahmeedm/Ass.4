import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';

const Productpage = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        if (savedCartItems) {
            setCartItems(JSON.parse(savedCartItems));
        }
    }, []);

    const handleAddToCart = (product) => {
        const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity++;
            setCartItems(updatedCartItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        } else {
            const updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
            setCartItems(updatedCartItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        }
    };

    return (
        <div className="product-page">
            
            <table style={{width: "100%"}}>
                <tr>
                    <td style={{width:"50%"}}><ProductList onAddToCart={handleAddToCart} /></td>
                    <td style={{ verticalAlign: 'top' }}><Cart cartItems={cartItems} setCartItems={setCartItems} /></td>
                </tr>
            </table>
            <Footer />
        </div>
    );
};

export default Productpage;
