import React from 'react';
import { Link } from 'react-router-dom';

import './CartBlock.scss';

const CartBlockEmpty = () => {
    return (
        <div className="empty-cart-block">
            <h1 className="empty-cart-block__title">Корзина пуста 😕</h1>
            <p className="empty-cart-block__text">Вероятней всего, вы ещё не заказывали пиццу.<br/>Для того чтобы заказать пиццу, перейдите на главную страницу.
            </p>
            <img src="" alt="" className="empty-cart-block__img" />
            <Link to="/">
                <button className="empty-cart-block__btn">Вернуться назад</button>
            </Link>
        </div>
    )
}

export default CartBlockEmpty;