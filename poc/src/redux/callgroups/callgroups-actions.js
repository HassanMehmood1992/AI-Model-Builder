// types of action
import axios from 'axios'

const Types = {
    SET_CALLGROUPS: "SET_CALLGROUPS",
    GLOBAL_CALL: "GLOBAL_CALL",
    TEST_COLOR: "TEST_COLOR"
  };

  // api actions for filters
  // const loadColor = () => {
  //   return (dispatch) => {
  //     return axios.get('http://www.colr.org/json/color/random').then(res => {
  //       dispatch(testColor("#"+res.data.new_color))
  //     })
  //   }
  // }
  // actions
  const setCallgroups = callgroup => ({
    type: Types.SET_CALLGROUPS,
    payload: callgroup
  });
  // const testColor = task => ({
  //   type: Types.TEST_COLOR,
  //   payload: task
  // });
  // const globalCall = task => ({
  //   type: Types.GLOBAL_CALL,
  //   payload: task
  // });

  export default {
    setCallgroups,
    Types
  };