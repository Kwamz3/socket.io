const { createServer } = require('http');
const { Server } = require('socket.io');

const httpServer = createServer();
const socket = new Server(httpServer, {
    cors: {
        origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    }
});

socket.on("connection", (socket) => {
    console.log(socket)
});

httpServer.listen(3000, () => {
    console.log('Server is connected!');
});