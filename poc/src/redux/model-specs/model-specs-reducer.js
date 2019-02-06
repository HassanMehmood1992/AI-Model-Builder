import ACTIONS from "./model-specs-actions";
import _ from "lodash";
const defaultState = {
  modelspec: {}
};
const modelspecsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.SET_MODEL_SPECS: {
      console.log(action);
      let item = action.payload;
      let newState = _.cloneDeep(state);
      newState = item;
      return newState;
    }
    case ACTIONS.Types.GLOBAL_CALL: {
      alert('model spec global call')
      return state;
    }
    default:
      return state;
  }
};
export default modelspecsReducer;