import React from 'react';
import { useSelector } from 'react-redux';

import { Categories, SortPopup, PizzaBlock } from '../components/index';

const Home = () => {
  const { items } = useSelector(({ pizzas }) => {
    return {
      items: pizzas.items,
    };
  });
  return (
    <main className="content">
      <div className="content__top">
        <Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
        <SortPopup
          items={[
            { name: 'популярности', type: 'popular' },
            { name: 'по цене', type: 'price' },
            { name: 'по алфавиту', type: 'alphabet' },
          ]}
        />
      </div>

      <div className="products">
        <div className="products__title">
          <h2>Все пиццы</h2>
        </div>
        <div className="products__block">
          {items?.map((item) => (
            <PizzaBlock key={item.id} {...item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
