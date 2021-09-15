export const setSortBy = (sortObj) => ({
  type: "SET_SORT_BY",
  payload: sortObj,
});

export const setCategory = (catIndex) => ({
  type: "SET_CATEGORY",
  payload: catIndex,
});
