import React from 'react';
import classNames from 'classnames';

import './Button.scss';

const Button = ({ onClickBtn, children, cart, outline, add }) => {
  return (
    <button
      onClick={onClickBtn}
      className={classNames('button', {
        'button--cart': cart,
        'button--outline': outline,
        'button--add': add,
      })}>
      {children}
    </button>
  );
};

export default Button;
