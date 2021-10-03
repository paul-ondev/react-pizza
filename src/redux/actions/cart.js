export const addPizzaToCart = (pizzaObj) => ({
  type: "ADD_PIZZA_CART",
  payload: pizzaObj,
});

export const emptyItemsInCart = () => ({
  type: "EMPTY_ITEMS_CART",
});

export const incrementPizza = (pizzaObj) => ({
  type: "INCREMENT_PIZZA_CART",
  payload: pizzaObj,
});

export const decrementPizza = (pizzaObj) => ({
  type: "DECREMENT_PIZZA_CART",
  payload: pizzaObj,
});

export const deletePizzas = (pizzaObj) => ({
  type: "DELETE_PIZZA_CART",
  payload: pizzaObj,
});
