import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock } from '../components/index';
import { setCategory } from '../redux/actions/filters'

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'по цене', type: 'price' },
  { name: 'по алфавиту', type: 'alphabet' },
];

const Home = () => {
  const dispatch = useDispatch();

  const { items } = useSelector(({ pizzas }) => {
    return {
      items: pizzas.items,
    };
  });

  const onSelectCategory = (index) => {
    dispatch(setCategory(index))
  }
  return (
    <main className="content">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoryNames} />
        <SortPopup
          items={sortItems}
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
