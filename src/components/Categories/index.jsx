import React, { useState } from 'react';

import './../Categories/Categories.scss';

const Categories = React.memo(function Category({ items, onClickItem }) {
  const [activeItem, setActiveItem] = useState(null);
  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickItem(index);
  };
  return (
    <div className="categories">
      <ul className="categories__list">
        <li className={activeItem === null ? 'active' : null} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items?.map((item, index) => {
          return (
            <li
              onClick={() => onSelectItem(index)}
              className={activeItem === index ? 'active' : null}
              key={`${item}_${index}`}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default Categories;
