/* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components/index';
import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";


const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'rating' },
  { name: 'по цене', type: 'price' },
  { name: 'по алфавиту', type: 'name' },
];

const Home = () => {
  const dispatch = useDispatch();

  const { items, isLoaded } = useSelector(({ pizzas }) => {
    return {
      items: pizzas.items,
      isLoaded: pizzas.isLoaded,
    };
  });

  const { category, sortBy } = useSelector(state => state.filter);

  const cart = useSelector(({cart}) => cart);
  

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectCategory = (index) => {
    dispatch(setCategory(index))
  };

  const onSelectSortBy = (index) => {
    dispatch(setSortBy(sortItems[index]))
  }

  const handleAddPizza = (pizzaObj) => {
    dispatch(addPizzaToCart(pizzaObj))
  }

  return (
    <main className="content">
      <div className="content__top">
        <Categories activeCategory={category} onClickItem={onSelectCategory} items={categoryNames} />
        <SortPopup
          items={sortItems}
          onClickSortBy={onSelectSortBy}
          activeSortBy={sortBy}
        />
      </div>

      <div className="products">
        <div className="products__title">
          <h2>Все пиццы</h2>
        </div>
        <div className="products__block">
          {isLoaded ? items.map((item) => (
            <PizzaBlock addedCart={cart} onAddPizza={handleAddPizza} key={item.id} {...item} />
          )) : Array(12).fill(0).map((_, index) => <PizzaLoadingBlock key={index} />)}
        </div>
      </div>
    </main>
  );
};

export default Home;
