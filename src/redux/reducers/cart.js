const initialState = {
  items: {},
  totalPrice: 0,
  totalAmount: 0,
};

const cart = (state = initialState, action) => {
  if (action.type === "SET_TOTAL_PRICE") {
    return {
      ...state,
      totalPrice: action.payload,
    };
  }
  if (action.type === "SET_TOTAL_PRICE") {
    return {
      ...state,
      totalAmount: action.payload,
    };
  }
  return state;
};

export default cart;
