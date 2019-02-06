// types of action
const Types = {
    SET_FILTERS: "SET_FILTERS",
    GLOBAL_CALL: "GLOBAL_CALL"
  };
  // actions
  const setFilters = task => ({
    type: Types.SET_FILTERS,
    payload: task
  });
  const globalCall = task => ({
    type: Types.GLOBAL_CALL,
    payload: task
  });

  export default {
    setFilters,
    globalCall,
    Types
  };