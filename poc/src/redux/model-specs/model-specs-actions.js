// types of action
const Types = {
    SET_MODEL_SPECS: "SET_MODEL_SPECS",
    GLOBAL_CALL: "GLOBAL_CALL"
  };
  // actions
  const setModelSpecs = task => ({
    type: Types.SET_MODEL_SPECS,
    payload: task
  });
  const globalCall = task => ({
    type: Types.GLOBAL_CALL,
    payload: task
  });
  export default {
    setModelSpecs,
    Types
  };