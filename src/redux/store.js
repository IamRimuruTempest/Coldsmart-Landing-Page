import { rootReducer } from "./rootReducer";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware))
);

export default store;
