import React from 'react';

import {CartPizza} from './../index'
import './CartBlock.scss';

const CartBlock = () => {
    return (
        <div className="cart-block">
            <div className="cart-block-top">
                <div className="cart-block-top__title">
                    <div className="cart-block-top__cart-icon">
                        <svg className='cart-icon__main' width="31" height="22" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.85117 8.24999H28.7916L26.7616 18.3879C26.6511 18.9442 26.3484 19.4439 25.9066 19.7996C25.4648 20.1553 24.912 20.3442 24.3449 20.3333H11.5728C10.9828 20.3383 10.4113 20.1273 9.96612 19.74C9.52095 19.3527 9.23286 18.8159 9.15617 18.2308L7.3195 4.31083C7.24334 3.72991 6.95872 3.19643 6.51862 2.80968C6.07852 2.42292 5.5129 2.20922 4.927 2.20833H2.20825" stroke="#3F3F3F" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div className="cart-icon__wheels">
                            <svg className='cart-icon__wheel-1' width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.16667 6.79167C5.50136 6.79167 6.58334 5.70969 6.58334 4.37501C6.58334 3.04032 5.50136 1.95834 4.16667 1.95834C2.83198 1.95834 1.75 3.04032 1.75 4.37501C1.75 5.70969 2.83198 6.79167 4.16667 6.79167Z" stroke="#3F3F3F" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <svg className='cart-icon__wheel-2' width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.16667 6.79167C5.50136 6.79167 6.58334 5.70969 6.58334 4.37501C6.58334 3.04032 5.50136 1.95834 4.16667 1.95834C2.83198 1.95834 1.75 3.04032 1.75 4.37501C1.75 5.70969 2.83198 6.79167 4.16667 6.79167Z" stroke="#3F3F3F" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="cart-block-top__text">Корзина</div>
                </div>
                <div className="cart-block-top__empty-cart">
                    <div className="cart-block-top__trash-icon">
                        <svg className='trash-icon__main' width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.66663 4.00001V2.33334C3.66663 1.89131 3.84222 1.46739 4.15478 1.15483C4.46734 0.842266 4.89127 0.666672 5.33329 0.666672H8.66663C9.10865 0.666672 9.53258 0.842266 9.84514 1.15483C10.1577 1.46739 10.3333 1.89131 10.3333 2.33334V4.00001M12.8333 4.00001V15.6667C12.8333 16.1087 12.6577 16.5326 12.3451 16.8452C12.0326 17.1577 11.6087 17.3333 11.1666 17.3333H2.83329C2.39127 17.3333 1.96734 17.1577 1.65478 16.8452C1.34222 16.5326 1.16663 16.1087 1.16663 15.6667V4.00001H12.8333Z" stroke="#9b9999" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg className='trash-icon__horizont' width="18" height="2" viewBox="0 0 18 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 1H3.16667H16.5" stroke="#9b9999" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg className='trash-icon__vertical-1' width="2" height="7" viewBox="0 0 2 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.666626 1.16667V6.16667" stroke="#9b9999" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg className='trash-icon__vertical-2' width="2" height="7" viewBox="0 0 2 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.666626 1.16667V6.16667" stroke="#9b9999" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <span className="cart-block-top__empty-btn">Очистить корзину</span>
                </div>
            </div>
            <main className="cart-block-main">
                <CartPizza />
            </main>
        </div>
    )
}

export default CartBlock;