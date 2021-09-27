export const addPizzaToCart = (pizzaObj) => ({
  type: "ADD_PIZZA_CART",
  payload: pizzaObj,
});

export const deleteItemsInCart = () => ({
  type: "DELETE_ITEMS_CART",
});
