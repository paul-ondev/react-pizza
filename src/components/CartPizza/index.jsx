import React from 'react';

import './CartPizza.scss'

function CartPizza() {
    return (
        <div className='cart-pizza'>
            <div className="cart-pizza__left">
                <img src="./../../assets/img/CartPage/PizzaImgCart.png" alt="Pizza" className="cart-pizza__img" />
                <div className="pizza-info">
                    <h2 className="pizza-info__title">Сырный цыпленок</h2>
                    <h3 className="pizza-info__description">тонкое тесто, 26 см.</h3>
                </div>
            </div>
            <div className="cart-pizza__right">
                <div className="quantity">
                    <span className="button button--outline button--add quantity__decrement">-</span>
                    <span className="quantity__number">2</span>
                    <span className="button button--outline button--add quantity__increment">+</span>
                </div>
                <span className="cart-pizza__price">290 ₽</span>
                <span className="cart-pizza__delete">+</span>
            </div>
        </div>
    )
}

export default CartPizza
