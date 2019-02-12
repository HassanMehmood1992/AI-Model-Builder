// types of action
const Types = {
    GET_USER: "GET_USER",
    SET_USER: "SET_USER",
    CLEAR_USER: "CLEAR_USER"
  };
  // actions
  const getUser = () => ({
    type: Types.GET_USER,
  });
  const setUser = user => ({
    type: Types.SET_USER,
    payload: user
  });
  const clearUser = () => ({
    type: Types.CLEAR_USER,
  });

  export default {
    getUser,
    setUser,
    clearUser,
    Types
  };