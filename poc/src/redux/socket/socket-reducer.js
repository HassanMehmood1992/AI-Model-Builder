import ACTIONS from "./socket-actions";
import _ from "lodash";
const defaultState = {
  socket: {}
};
const socketReducer = (state = defaultState, action) => {
  switch(action.type){
    case ACTIONS.Types.RECEIVE_MESSAGE:
      alert('received' + action.data)
      return Object.assign({}, {message:action.data});
    default:
      return state;
  }
};
export default socketReducer;