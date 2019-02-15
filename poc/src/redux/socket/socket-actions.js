// types of action

const serverPrefix = 'server/'
const Types = {
  SEND_MESSAGE: serverPrefix +"SEND_MESSAGE",
  RECEIVE_MESSAGE:'message',
  SUB_ROOM:serverPrefix +'SUB_ROOM',
  UNSUB_ROOM:serverPrefix +'UNSUB_ROOM',
  EMPTY_JOBLOGS:"EMPTY_JOBLOGS"
};
// actions
const subToRoom = room => ({
  type: Types.SUB_ROOM,
  data: room
});
const unsubRoom = room => ({
  type: Types.UNSUB_ROOM,
  data: room
});
const sendMessage = message => ({
  type: Types.SEND_MESSAGE,
  data: message
});
const receiveMessage = message => ({
  type: Types.SEND_MESSAGE,
  data: message
});
const emptyJobLogs = () => ({
  type: Types.EMPTY_JOBLOGS
});
export default {
  sendMessage,
  receiveMessage,
  subToRoom,
  emptyJobLogs,
  unsubRoom,
  Types
};