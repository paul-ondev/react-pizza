import React from 'react';

import './../Categories/Categories.scss';

const Categories = React.memo(function Category({ activeCategory, items, onClickItem }) {
  
  
  return (
    <div className="categories">
      <ul className="categories__list">
        <li className={activeCategory === null ? 'active' : null} onClick={() => onClickItem(null)}>
          Все
        </li>
        {items?.map((item, index) => {
          return (
            <li
              onClick={() => onClickItem(index)}
              className={activeCategory === index ? 'active' : null}
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
