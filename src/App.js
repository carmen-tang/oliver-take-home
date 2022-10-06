import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// import Home from './Components/Home';
import Product from './Components/Product';
import Products from './Components/Products';

export default function OliverTakeHome() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            {/* <Home /> */}
            <Products />
          </Route>
          
          <Route exact path="/products">
            {/* <Home /> */}
            <Products />
          </Route>

          <Route exact path="/product-detail">
            {/* <Home /> */}
            <Product />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}
