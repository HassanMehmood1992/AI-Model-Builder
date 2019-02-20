
import { createStore, applyMiddleware,combineReducers } from "redux";
// Logger with default options
import logger from "redux-logger";
import reducer from "./filters/filter-reducer";
import modelreducer from "./model-specs/model-specs-reducer";
import socketReducer from "./socket/socket-reducer";
import localStorageReducer from "./localstorage/localstorage-reducer";
import thunk from 'redux-thunk';

import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import callgroupReducer from "./callgroups/callgroups-reducer";
let socket = io('http://localhost:3000');
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");


export default function configureStore(initialState) {
  const store = createStore( combineReducers({
      filters: reducer,
      callgroup: callgroupReducer,
      modelspec:modelreducer,
      localStorage: localStorageReducer,
      socket:socketReducer
}), initialState, applyMiddleware(socketIoMiddleware,logger,thunk));

// store.subscribe(()=>{
//   console.log('new client state', store.getState());
// });
// store.dispatch({type:'server/hello', data:'Hello!'});

  return store;
}