import ACTIONS from "./localstorage-actions";
import _ from "lodash";
const defaultState = {
  user: localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).user : {}
};
const localStorageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.SET_USER: {
      let item = action.payload;
      let newState = _.cloneDeep(state);
      newState = item;
      localStorage.setItem('currentUser',JSON.stringify(newState))
      return newState;
    }
    case ACTIONS.Types.GET_USER: {
      return state;
    }
    case ACTIONS.Types.CLEAR_USER: {
      let user = {
        user: {}
      }
      localStorage.setItem('currentUser',JSON.stringify(user))
      return user;
    }
    default:
      return state;
  }
};
export default localStorageReducer;