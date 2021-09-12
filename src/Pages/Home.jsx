import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components/index';
import { setCategory } from '../redux/actions/filters'
import { fetchPizzas } from "../redux/actions/pizzas";

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'по цене', type: 'price' },
  { name: 'по алфавиту', type: 'alphabet' },
];

const Home = () => {
  const dispatch = useDispatch();

  const {items, isLoaded}  = useSelector(({ pizzas }) => {
    return {
      items: pizzas.items,
      isLoaded: pizzas.isLoaded,
    };
  });
  
  useEffect(() => {
    if (!items.length) {
      dispatch(fetchPizzas())
    }
    
    ;
  }, []);

  const onSelectCategory = (index) => {
    dispatch(setCategory(index))
  }
  console.log( isLoaded);
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
          {isLoaded ? items.map((item) => (
            <PizzaBlock key={item.id} {...item} />
          )) : Array(12).fill(<PizzaLoadingBlock />)}
        </div>
      </div>
    </main>
  );
};

export default Home;
