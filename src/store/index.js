import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer/rootReducer";
import initialState from "./initialState";

const composeEnhancers = (process.env.NODE_ENV === "development"
  ? composeWithDevTools
  : compose);

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const store = createStore(rootReducer, initialState, enhancer);

export default store;