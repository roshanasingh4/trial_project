import ADD_TO_CART from "../constants/cartConstants";

const addToCart = (plan) => async (dispatch, getState) => {
  console.log(plan);
  dispatch({
    type: ADD_TO_CART,
    payload: {
      id: plan.id,
      name: plan.name,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart));
};
export { addToCart };
