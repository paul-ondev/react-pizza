import React from 'react';
import {useSelector} from 'react-redux';


import {CartBlockEmpty, CartBlock} from '../components/index'

const Cart = () => {
  const isEmpty = useSelector(({cart}) => cart)
  console.log(isEmpty)
  return (
    <main className="content--cart">
      {isEmpty.totalAmount ? <CartBlock /> : <CartBlockEmpty />}
    </main>
  );
};

export default Cart;
