import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Header.scss';

import { Button } from './../index.js';

import logoSvg from './../../assets/img/logo.svg';


const Header = () => {
  const {totalPrice, totalAmount} = useSelector(({cart}) => ({
    totalPrice: cart.totalPrice,
    totalAmount: cart.totalAmount,
  }))


  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">
          <img src={logoSvg} alt="Pizza Logo" />
          <div>
            <h1>BEST PIZZA</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
      </Link>

      <Link to="/cart">
        <div className="header__cart">
          <Button cart>
            <span>{totalPrice} ₽</span>
            <div className="line"></div>
            <div className="cartIcon">
              <svg className="cartIcon__wain"
              width="18"
              height="13"
              viewBox="0 0 18 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg className="cartIcon__wheel-l" width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.33333 4.33332C3.06971 4.33332 3.66667 3.73637 3.66667 2.99999C3.66667 2.26361 3.06971 1.66666 2.33333 1.66666C1.59695 1.66666 1 2.26361 1 2.99999C1 3.73637 1.59695 4.33332 2.33333 4.33332Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokLinejoin="round"/>
            </svg>
            <svg className="cartIcon__wheel-r" width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.33333 4.33332C3.06971 4.33332 3.66667 3.73637 3.66667 2.99999C3.66667 2.26361 3.06971 1.66666 2.33333 1.66666C1.59695 1.66666 1 2.26361 1 2.99999C1 3.73637 1.59695 4.33332 2.33333 4.33332Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokLinejoin="round"/>
            </svg>
            </div>
            
            <span>{totalAmount}</span>
          </Button>
        </div>
      </Link>
    </header>
  );
};

export default Header;
