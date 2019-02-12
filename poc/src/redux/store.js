
import { createStore, applyMiddleware,combineReducers } from "redux";
// Logger with default options
import logger from "redux-logger";
import reducer from "./filters/filter-reducer";
import modelreducer from "./model-specs/model-specs-reducer";
import localStorageReducer from "./localstorage/localstorage-reducer";
export default function configureStore(initialState) {
  const store = createStore( combineReducers({
      filters: reducer,
      modelspec:modelreducer,
      localStorage: localStorageReducer

}), initialState, applyMiddleware(logger));
  return store;
}