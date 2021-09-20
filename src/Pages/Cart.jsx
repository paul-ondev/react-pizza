import React from 'react';

import {CartBlockEmpty, CartBlock} from '../components/index'

const Cart = () => {
  return (
    <main className="content--cart">
      {/*<CartBlockEmpty />*/}
      <CartBlock />
    </main>
  );
};

export default Cart;
