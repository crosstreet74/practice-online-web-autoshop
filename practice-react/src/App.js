import 'bootstrap/dist/css/bootstrap.css'
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./assets/css/carousel.css";
import "./assets/css/myStyle.css";
import "./assets/css/style.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap.css";
import "./assets/css/googlefont.css";
import "./assets/icons8/css/line-awesome.min.css";
// import "./assets/css/layout.css";

import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Wishlist from './components/pages/Wishlist/Wishlist';
import Cart from './components/pages/Cart/Cart';
import Compare from './components/pages/Compare/Compare';
import Shop from './components/pages/Shop/Shop';
import MyAccount from './components/pages/MyAccount/MyAccount';
import ProductDetail from './components/elements/widgets/product/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/products/:id"><ProductDetail/></Route>
        <Route exact path="/cart"><Cart/></Route>
        <Route exact path="/wishlist"><Wishlist/></Route>
        <Route exact path="/compare"><Compare/></Route>
        <Route exact path="/myaccount"><MyAccount/></Route>
        <Route exact path="/about"><About/></Route>
        <Route exact path="/shop"><Shop/></Route>
        <Route exact path="/faqs"></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
