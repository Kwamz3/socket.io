const { createServer } = require('http');
const { Server } = require('socket.io');

const httpServer = createServer();
const socket = new Server(httpServer, {
    cors: {
        origin:"http://localhost:5500"
    }
})

socket.on('connection', (socket) => {
    console.log(socket);

    socket.emit('message', "Heyaa");

    socket.on('message', (data) => {
    console.log(data)
    });
});

httpServer.listen(3000, () => {
    console.log('Server is connected!');
});