import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../Styles/Home.scss';
import chair from '../Images/chair.png';

function ProductGrid() {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        // use axios to get data from json file
        axios.get('http://localhost:3004/products')
        .then(res => {
            console.log(res);
            setProducts(res.data);
        })
    }

    useEffect(() => {
        getProducts();
    },[])

    return (
        <div className="ProductGrid">
            <div className="grid-header">
                <h1>Refurbished</h1>
                <div className="sort-wrapper">
                <select>
                    <option value="sort">Sort By</option>
                    <option value="new">Newest</option>
                    <option value="low">Lowest Price</option>
                    <option value="high">HighestPrice</option>
                </select>
                </div>
            </div>
            <div className="grid-wrapper">
                {products.map((product) => {
                    const dollars = (product.priceCents/ 100).toLocaleString("en-US", {style:"currency", currency:"USD"});

                    return (
                        <div key={product.id} className="product">
                            <div className="product-image"><img src={chair} alt="product" /></div>
                            <div className="product-info">
                                <p className="product-name">{product.name}</p>
                                <p className="product-price">{dollars}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ProductGrid;
