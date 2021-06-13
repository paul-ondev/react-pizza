import React from 'react';
import classNames from 'classnames';

import './Button.scss';

const Button = ({ children, cart, outline }) => {
  return (
    <button
      className={classNames('button', {
        'button--cart': cart,
        'button--outline': outline,
      })}>
      {children}
    </button>
  );
};

export default Button;
