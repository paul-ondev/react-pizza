import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { setPizzas } from './redux/actions/pizzas';

import './index.scss';

import { Header } from "./components/index";
import { Home, Cart } from './Pages';

function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    axios.get('http://localhost:3000/db.json')
      .then(({ data }) =>
        dispatch(setPizzas(data.pizzas))
      )
  }, []);


  return (
    <div className="wrapper">
      <Header />

      <Route exact path='/'>
        <Home />
      </Route>

      <Route path='/cart'>
        <Cart />
      </Route>
    </div>
  );
}

export default App;
