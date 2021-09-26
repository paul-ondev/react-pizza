const initialState = {
  items: {},
  totalPrice: 0,
  totalAmount: 0,
};
function writeItems(key, state, action) {
  let result;

  if (Object.keys(state.items).includes(key)) {
    let value = state.items[key];
    value.totalAmountInCart = ++value.totalAmountInCart;
    value.totalPriceInCart = value.totalPriceInCart + action.payload.price;
    state.items[key] = value;
    result = state.items;
  } else {
    let value = action.payload;
    value.totalAmountInCart = 1;
    value.totalPriceInCart = action.payload.price;
    state.items[key] = value;
    result = state.items;
  }
  return result;
}

const cart = (state = initialState, action) => {
  if (action.type === "ADD_PIZZA_CART") {
    let key = `id-${action.payload.id}_type-${action.payload.type}_size-${action.payload.size}`;

    console.log("action dispatched ");
    console.log("state is", state.items);

    let newItems = writeItems(key, state, action);
    const findTotalSum = (property) =>
      Object.values(newItems)
        .map((obj) => obj[property])
        .reduce((sum, current) => sum + current, 0);
    return {
      ...state,
      items: newItems,
      totalPrice: findTotalSum("totalPriceInCart"),
      totalAmount: findTotalSum("totalAmountInCart"),
    };
  }

  return state;
};

export default cart;
