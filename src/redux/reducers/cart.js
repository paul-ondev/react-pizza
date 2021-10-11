const initialState = {
  items: {},
  totalPrice: 0,
  totalAmount: 0,
  amountInCartById: {},
};

const findAmountOfPizzasInCart = (id, addedPizzas) => {
  let count = 0;

  const key = `id-${id}`;
  let arr = Object.keys(addedPizzas).filter((item) =>
    item.toString().includes(key)
  );

  for (const one of arr) {
    count = count + addedPizzas[one].totalAmountInCart;
  }

  return count;
};

function writeItems(key, state, action, id) {
  let result = {
    newItems: null,
    newAmountInCartById: null,
  };

  if (Object.keys(state.items).includes(key)) {
    let value = state.items[key];
    value.totalAmountInCart = ++value.totalAmountInCart;
    value.totalPriceInCart = value.totalPriceInCart + action.payload.price;
    state.items[key] = value;
    result.newItems = state.items;
    result.newAmountInCartById = findAmountOfPizzasInCart(id, result.newItems);
  } else {
    let value = action.payload;
    value.totalAmountInCart = 1;
    value.totalPriceInCart = action.payload.price;
    state.items[key] = value;
    result.newItems = state.items;
    result.newAmountInCartById = findAmountOfPizzasInCart(id, result.newItems);
  }
  return result;
}

function changeAmount(key, state, action, id) {
  let result = {
    newItems: null,
    newAmountInCartById: null,
  };

  if (action.type === "INCREMENT_PIZZA_CART") {
    let currentItems = state.items;
    currentItems[key].totalAmountInCart = ++currentItems[key].totalAmountInCart;
    currentItems[key].totalPriceInCart =
      currentItems[key].totalPriceInCart + action.payload.price;
    result.newItems = currentItems;
    result.newAmountInCartById = findAmountOfPizzasInCart(id, result.newItems);
  }

  if (action.type === "DECREMENT_PIZZA_CART") {
    let currentItems = state.items;
    currentItems[key].totalAmountInCart = --currentItems[key].totalAmountInCart;
    currentItems[key].totalPriceInCart =
      currentItems[key].totalPriceInCart - action.payload.price;
    result.newItems = currentItems;
    result.newAmountInCartById = findAmountOfPizzasInCart(id, result.newItems);
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

    let { newItems, newAmountInCartById } = writeItems(
      key,
      state,
      action,
      action.payload.id
    );

    let currentAmount = state.amountInCartById;
    currentAmount[action.payload.id] = newAmountInCartById;
    return {
      ...state,
      items: newItems,
      totalPrice: findTotalSum("totalPriceInCart", newItems),
      totalAmount: findTotalSum("totalAmountInCart", newItems),
      amountInCartById: currentAmount,
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

    let { newItems, newAmountInCartById } = changeAmount(
      key,
      state,
      action,
      action.payload.id
    );

    let currentAmount = state.amountInCartById;
    currentAmount[action.payload.id] = newAmountInCartById;

    return {
      ...state,
      items: newItems,
      totalPrice: findTotalSum("totalPriceInCart", newItems),
      totalAmount: findTotalSum("totalAmountInCart", newItems),
      amountInCartById: currentAmount,
    };
  }

  if (action.type === "DECREMENT_PIZZA_CART") {
    let key = `id-${action.payload.id}_type-${action.payload.type}_size-${action.payload.size}`;

    let { newItems, newAmountInCartById } = changeAmount(
      key,
      state,
      action,
      action.payload.id
    );

    let currentAmount = state.amountInCartById;
    currentAmount[action.payload.id] = newAmountInCartById;

    return {
      ...state,
      items: newItems,
      totalPrice: findTotalSum("totalPriceInCart", newItems),
      totalAmount: findTotalSum("totalAmountInCart", newItems),
      amountInCartById: currentAmount,
    };
  }

  if (action.type === "DELETE_PIZZA_CART") {
    let key = `id-${action.payload.id}_type-${action.payload.type}_size-${action.payload.size}`;
    let newItems = state.items;
    delete newItems[key];

    let currentAmount = state.amountInCartById;
    currentAmount[action.payload.id] = findAmountOfPizzasInCart(
      action.payload.id,
      newItems
    );
    return {
      ...state,
      items: newItems,
      totalPrice: findTotalSum("totalPriceInCart", newItems),
      totalAmount: findTotalSum("totalAmountInCart", newItems),
      amountInCartById: currentAmount,
    };
  }

  return state;
};

export default cart;
