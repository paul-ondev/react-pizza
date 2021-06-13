import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

import './index.scss';

import { Header } from "./components/index";
import { Home, Cart } from './components/Pages';

function App() {
  const [pizzasList, setPizzasList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((response) =>
        response.json()
      )
      .then((json) =>
        setPizzasList(json.pizzas)
      )
  }, []);


  return (
    <div className="wrapper">
      <Header />

      <Route exact path='/'>
        <Home items={pizzasList} />
      </Route>

      <Route path='/cart'>
        <Cart />
      </Route>
    </div>
  );
}

export default App;
