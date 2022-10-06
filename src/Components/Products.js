import React from 'react';
import '../Styles/Home.scss';

import Header from '../Components/Header';
import ProductGrid from '../Components/ProductGrid';

class Products extends React.Component {
  render() {
    return (
        <div className="Products">
            <Header />
            <ProductGrid />
        </div>
      );
  }
}

export default Products;
