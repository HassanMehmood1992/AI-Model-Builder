
import { createStore, applyMiddleware,combineReducers } from "redux";
// Logger with default options
import logger from "redux-logger";
import reducer from "./filters/filter-reducer";
import modelreducer from "./model-specs/model-specs-reducer";
export default function configureStore(initialState) {
  const store = createStore( combineReducers({
      filters: reducer,
      modelspec:modelreducer

}), initialState, applyMiddleware(logger));
  return store;
}