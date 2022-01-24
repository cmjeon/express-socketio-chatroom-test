'use strict'
const socket = io();

const nickname = document.querySelector('#nickname');
const chatlist = document.querySelector('.chatting-list');
const chatInput = document.querySelector('.chatting-input');
const sendButton = document.querySelector('.send-button')

sendButton.addEventListener("click", () => {
  const param = {
    name:nickname.value,
    msg:chatInput.value,
  }
  socket.emit("chatting1", param)
})

socket.emit('chatting1', "from front")

socket.on('chatting1', (data) => {
  console.log(data);
})