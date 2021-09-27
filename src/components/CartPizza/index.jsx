import React from 'react';

import './CartPizza.scss'

function CartPizza({name, image, type, size, totalAmountInCart, totalPriceInCart}) {
    return (
        <div className='cart-pizza'>
            <div className="cart-pizza__left">
                <img src={image} alt="Pizza" className="cart-pizza__img" />
                <div className="pizza-info">
                    <h2 className="pizza-info__title">{name}</h2>
                    <h3 className="pizza-info__description">{type}, {size} см.</h3>
                </div>
            </div>
            <div className="cart-pizza__right">
                <div className="quantity">
                    <span className="button button--outline button--add quantity__decrement">-</span>
                    <span className="quantity__number">{totalAmountInCart}</span>
                    <span className="button button--outline button--add quantity__increment">+</span>
                </div>
                <span className="cart-pizza__price">{totalPriceInCart} ₽</span>
                <span className="cart-pizza__delete">+</span>
            </div>
        </div>
    )
}

export default CartPizza
