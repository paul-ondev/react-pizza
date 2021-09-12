import React from "react";
import { Route } from "react-router-dom";

import "./index.scss";

import { Header } from "./components/index";
import { Home, Cart } from "./Pages";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/cart">
        <Cart />
      </Route>
    </div>
  );
}

export default App;
