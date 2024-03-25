import React, { useEffect, useState } from 'react'
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

    return (
        <div className="product-page">
            <Header />
            <table>
                <tr>
                    <td><ProductList /></td>
                    <td style={{ verticalAlign: 'top' }}><Cart /></td>
                </tr>
            </table>
            <Footer />
        </div>
    );
};

export default Productpage;