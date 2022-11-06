import React, { Component, useState } from "react";
import Header from "./HeaderComponent";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import Product from "./ProductComponent";
import Footer from "./FooterComponent";
import { PRODUCTS } from "../shared/products";
import ProductDetail from "./ProductDetailComponent";
import Cart from "./Cart";
import CartProvider from "../store/CartProvider";

const Menu = (props) => {
  const [products, setProducts] = useState(PRODUCTS);

  const ProductWithId = ({ match }) => {
    return (
      <ProductDetail
        product={
          products.filter(
            (product) => product.id === parseInt(match.params.productId, 10)
          )[0]
        }
      />
    );
  };

  const onProductSelect = (productId) => {
    setProducts(productId);
  };

  const [cartIsShown, setCartIsShown] = useState(false);

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const HomePage = () => {
    return (
      <div>
        <Home />
      </div>
    );
  };

  return (
    <>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Switch>
        <Route path="/home" component={Home} />
        <Route
          exact
          path="/product"
          component={() => <Product products={products} />}
        />
        <Route path="/contact" component={Contact} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </>
  );
};

export default Menu;
