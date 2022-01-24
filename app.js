const express = require('express');
const http = require('http');
const app = express();
const path = require('path');
const server = http.createServer(app);
const socketIO = require('socket.io');

const io = socketIO(server);

app.use(express.static(path.join(__dirname, "src")));

const PORT = process.env.PORT || 3000;

io.on('connection', (socket) => {
  socket.on('chatting1', (data) => {
    console.log(data)
    io.emit('chatting1', `반가워 ${data}`)
  })
})

server.listen(PORT, () => {
  console.log(`server is running ${PORT}`)
})