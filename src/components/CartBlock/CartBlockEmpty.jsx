import React from 'react';
import { Link } from 'react-router-dom';

import './CartBlock.scss';

const CartBlockEmpty = () => {
    return (
        <div className="empty-cart-block">
            <h1 className="empty-cart-block__title">Корзина пустая 😕</h1>
            <p className="empty-cart-block__text">Вероятней всего, вы не заказывали ещё пиццу.<br/>Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src="" alt="" className="empty-cart-block__img" />
            <Link to="/">
                <button className="empty-cart-block__btn">Вернуться назад</button>
            </Link>
        </div>
    )
}

export default CartBlockEmpty;