import React from "react";
import "./App.css";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart";
import { useState } from "react";

const App = (props) => {
  return (
    <CartProvider>
    <BrowserRouter>
      <div>
        <Main />
      </div>
    </BrowserRouter>
    </CartProvider>
  );
};

export default App;
