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

function changeAmount(key, state, action) {
  let result;

  if (action.type === "INCREMENT_PIZZA_CART") {
    let currentItems = state.items;
    currentItems[key].totalAmountInCart = ++currentItems[key].totalAmountInCart;
    currentItems[key].totalPriceInCart =
      currentItems[key].totalPriceInCart + action.payload.price;
    result = currentItems;
  }

  if (action.type === "DECREMENT_PIZZA_CART") {
    let currentItems = state.items;
    currentItems[key].totalAmountInCart = --currentItems[key].totalAmountInCart;
    currentItems[key].totalPriceInCart =
      currentItems[key].totalPriceInCart - action.payload.price;
    result = currentItems;
  }

  return result;
}

function findTotalSum(property, obj) {
  return Object.values(obj)
    .map((obj) => obj[property])
    .reduce((sum, current) => sum + current, 0);
}

const cart = (state = initialState, action) => {
  if (action.type === "ADD_PIZZA_CART") {
    let key = `id-${action.payload.id}_type-${action.payload.type}_size-${action.payload.size}`;

    let newItems = writeItems(key, state, action);

    return {
      ...state,
      items: newItems,
      totalPrice: findTotalSum("totalPriceInCart", newItems),
      totalAmount: findTotalSum("totalAmountInCart", newItems),
    };
  }

  if (action.type === "EMPTY_ITEMS_CART") {
    return {
      ...state,
      items: {},
      totalPrice: 0,
      totalAmount: 0,
    };
  }

  if (action.type === "INCREMENT_PIZZA_CART") {
    let key = `id-${action.payload.id}_type-${action.payload.type}_size-${action.payload.size}`;

    let newItems = changeAmount(key, state, action);

    return {
      ...state,
      items: newItems,
      totalPrice: findTotalSum("totalPriceInCart", newItems),
      totalAmount: findTotalSum("totalAmountInCart", newItems),
    };
  }

  if (action.type === "DECREMENT_PIZZA_CART") {
    let key = `id-${action.payload.id}_type-${action.payload.type}_size-${action.payload.size}`;

    let newItems = changeAmount(key, state, action);

    return {
      ...state,
      items: newItems,
      totalPrice: findTotalSum("totalPriceInCart", newItems),
      totalAmount: findTotalSum("totalAmountInCart", newItems),
    };
  }

  if (action.type === "DELETE_PIZZA_CART") {
    let key = `id-${action.payload.id}_type-${action.payload.type}_size-${action.payload.size}`;
    let newItems = state.items;
    delete newItems[key];
    return {
      ...state,
      items: newItems,
      totalPrice: findTotalSum("totalPriceInCart", newItems),
      totalAmount: findTotalSum("totalAmountInCart", newItems),
    };
  }

  return state;
};

export default cart;
