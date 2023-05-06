import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { userLoginReducer } from "./reducers/userReducers";
import { cartReducers } from "./reducers/cartReducers";
import { contactUsReducer } from "./reducers/contactUsReducers";

const reducer = combineReducers({
  user: userLoginReducer,
  cart: cartReducers,
  contactUs: contactUsReducer,
});

const userInfoFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const cartFromStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : null;

const initialState = {
  user: { userInfo: userInfoFromStorage },
  cart: cartFromStorage,
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
