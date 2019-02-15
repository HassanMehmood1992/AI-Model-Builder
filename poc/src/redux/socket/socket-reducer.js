import ACTIONS from "./socket-actions";
import _ from "lodash";
const defaultState = {
  socket: {
    joblogs: []
  }

};
const socketReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.RECEIVE_MESSAGE:
    let item = action.data;
    let newState = _.cloneDeep(state);
    newState.socket.joblogs.push(item);
    return newState;
  
      
     

    case ACTIONS.Types.SUB_ROOM:
      alert('logs connected' + action.data)
      return state
    case ACTIONS.Types.UNSUB_ROOM:
      
      return {...state,socket:{joblogs:[]}}
    case ACTIONS.Types.EMPTY_JOBLOGS:
      let newState2 = _.cloneDeep(state);
      newState2.socket.joblogs = [];
      return newState2
    default:
      return state;
  }
};
export default socketReducer;