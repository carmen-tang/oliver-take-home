import React from 'react';
import '../Styles/Home.scss';

import Header from '../Components/Header';
import ProductDetail from '../Components/ProductDetail';

class Product extends React.Component {
  render() {
    return (
        <div className="Product">
            <Header />
            <ProductDetail />
        </div>
      );
  }
}

export default Product;
