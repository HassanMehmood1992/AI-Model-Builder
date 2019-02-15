// const app = require('express')();
// const http = require('http').Server(app);
// const io = require('socket.io')(http).of('app1');

// const ioActionHandler = require('react-redux-socket/server')

// const myHandler = function(action, { dispatch, broadcast }){
//     console.log('ss')
//   switch(action.type) {
//     case 'MY_ACTION_FROM_CLIENT_TO_SERVER':
//       dispatch({ type: 'MY_ANSWER_FROM_SERVER_TO_CLIENT' })
//       break;
//     case 'MY_OTHER_ACTION_FROM_CLIENT':
//       broadcast({ type: 'MY_ANSWER_TO_ALL_CLIENTS' })
//       break;
//   }
// }

// ioActionHandler(io).onConnect(function(data){
//     console.log('connected')
// })
// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });

// const app = require('express')();
// const http = require('http').Server(app);
// const io = require('socket.io')(http).of('/');

// const ioActionHandler = require('react-redux-socket/server')

// const myHandler = function(action, { dispatch, broadcast }){
//     console.log(action)
//   switch(action.type) {
//     case 'MY_ACTION_FROM_CLIENT_TO_SERVER':
//     console.log(action.type)
//       dispatch({ type: 'MY_ANSWER_FROM_SERVER_TO_CLIENT' })
//       break;
//     case 'ONOPEN':
//         console.log('ss')
//       dispatch({ type: 'MY_ANSWER_FROM_SERVER_TO_CLIENT' })
//       break;
//     case 'MY_OTHER_ACTION_FROM_CLIENT':
//       broadcast({ type: 'MY_ANSWER_TO_ALL_CLIENTS' })
//       break;
//   }
// }

// ioActionHandler(io, myHandler).onConnect(function(data){
//     console.log('connected')
// })
// ioActionHandler(io).onActionIn(function(data){
//     console.log('dat')
// })

// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });

var http = require('http');
var server = http.createServer();
var socket_io = require('socket.io');
server.listen(3000);
var io = socket_io();
io.attach(server);
var id = 0;
io.on('connection', function(socket){
  console.log("Socket connected: " + socket.id);
  setInterval(function(){
    io.to('jobs').emit('action', {type:'message', data:{id:id++,log:'good day'}});
  },5000)
  
  socket.on('action', (action) => {
    //console.log('sssss')
    if(action.type === 'server/SEND_MESSAGE'){
      console.log('Got hello data!', action.data);
     
      socket.emit('action', {type:'message', data:'good day!'});
    }
   
    if(action.type === 'server/SUB_ROOM'){
      console.log('Got hello data!', action.data);
      socket.join('jobs');
      //socket.emit('action', {type:'message', data:'good day!'});
    }
    if(action.type === 'server/UNSUB_ROOM'){
      console.log('unsub jobs!', action.data);

      socket.leave('jobs');
      //socket.emit('action', {type:'message', data:'good day!'});
    }
  });

});

