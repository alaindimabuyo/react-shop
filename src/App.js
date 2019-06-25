import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";
import Details from "./components/Details";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Default from "./components/Default";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route path='/details' component={Details} />
        <Route path='/cart' component={Cart} />
        <Route component={Default} />
      </Switch>
    </Fragment>
  );
}

export default App;
