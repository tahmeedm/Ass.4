import React, { useEffect, useState } from 'react';
import productsData from '../data/products';
import ProductItem from './ProductItem';

const ProductList = ({ onAddToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productsData);
    }, []);
    
    return (
        <div>
            {products.map((product) => (
                <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
        </div>
    );
};

export default ProductList;
