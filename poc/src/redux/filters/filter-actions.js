// types of action
import axios from 'axios'

const Types = {
    SET_FILTERS: "SET_FILTERS",
    GLOBAL_CALL: "GLOBAL_CALL",
    TEST_COLOR: "TEST_COLOR"
  };

  // api actions for filters
  const loadColor = () => {
    return (dispatch) => {
      return axios.get('http://www.colr.org/json/color/random').then(res => {
        dispatch(testColor("#"+res.data.new_color))
      })
    }
  }
  // actions
  const setFilters = task => ({
    type: Types.SET_FILTERS,
    payload: task
  });
  const testColor = task => ({
    type: Types.TEST_COLOR,
    payload: task
  });
  const globalCall = task => ({
    type: Types.GLOBAL_CALL,
    payload: task
  });

  export default {
    setFilters,
    loadColor,
    testColor,
    globalCall,
    Types
  };