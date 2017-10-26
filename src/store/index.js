import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import combineReducers from "./reducers";

export default function configureStore(initialState) {
  return createStore(combineReducers, initialState, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}
