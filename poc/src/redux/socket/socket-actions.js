// types of action

const serverPrefix = 'server/'
const Types = {
  SEND_MESSAGE: serverPrefix +"SEND_MESSAGE",
  RECEIVE_MESSAGE:'message'
};
// actions

const sendMessage = message => ({
  type: Types.SEND_MESSAGE,
  data: message
});
const receiveMessage = message => ({
  type: Types.SEND_MESSAGE,
  data: message
});
export default {
  sendMessage,
  receiveMessage,
  Types
};