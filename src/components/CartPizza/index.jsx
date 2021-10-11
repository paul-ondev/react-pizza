import React from 'react';

import './CartPizza.scss'

function CartPizza({name, id, image, type, size, price, changeQuantity, totalAmountInCart, totalPriceInCart}) {
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
                    <button onClick={()=>(changeQuantity("DECREMENT", id, type, size, price))} disabled={totalAmountInCart === 1} className="button button--outline button--add quantity__decrement">-</button>
                    <span className="quantity__number">{totalAmountInCart}</span>
                    <button onClick={()=>(changeQuantity("INCREMENT", id, type, size, price))} className="button button--outline button--add quantity__increment">+</button>
                </div>
                <span className="cart-pizza__price">{totalPriceInCart} ₽</span>
                <span onClick={()=>(changeQuantity("DELETE", id, type, size, price))} className="cart-pizza__delete">+</span>
            </div>
        </div>
    )
}

export default CartPizza
