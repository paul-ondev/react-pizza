import axios from "axios";

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch({
    type: "SET_LOADED",
    payload: false,
  });
  axios
    .get(
      `/pizzas?${category !== null ? `category=${category}&` : ""}_sort=${
        sortBy.type
      }&_order=asc`
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});
