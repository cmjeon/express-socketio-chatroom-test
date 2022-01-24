'use strict'
const socket = io();

socket.emit('chatting1', "from front")

socket.on('chatting1', (data) => {
  console.log(data);
})