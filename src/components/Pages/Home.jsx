import React from 'react';

import { Categories, SortPopup, PizzaBlock } from './../index';

const Home = ({ items }) => {
  return (
    <main className="content">
      <div className="content__top">
        <Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
        <SortPopup items={['популярности', 'по цене', 'по алфавиту']} />
      </div>

      <div className="products">
        <div className="products__title">
          <h2>Все пиццы</h2>
        </div>
        <div className="products__block">
          {items.map((item) => (
            <PizzaBlock key={item.id} {...item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
