import ACTIONS from "./callgroups-actions";
import _ from "lodash";
const defaultState = {
  callgroups: {}
};
const callgroupReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.SET_CALLGROUPS: {
      console.log(action);
      let item = action.payload;
      let newState = _.cloneDeep(state);
      newState = item;
      return newState;
    }
    case ACTIONS.Types.GLOBAL_CALL: {
      alert('filter global call')
      return state;
    }
    case ACTIONS.Types.TEST_COLOR: {
      alert(action.payload)
      return state;
    }
    default:
      return state;
  }
};
export default callgroupReducer;