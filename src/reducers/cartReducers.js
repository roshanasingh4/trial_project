import ADD_TO_CART from "../constants/cartConstants";
export const cartReducers = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { cart: action.payload };
    default:
      return state;
  }
};
