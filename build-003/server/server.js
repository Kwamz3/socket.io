const { createServer } = require('http');
const { Server } = require('socket.io');
const PORT = 3000;

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin:"http://localhost:5173"
    }
})

let crudData = [];

io.on("connection", (socket) => {
    console.log(socket.id)
})

httpServer.listen(PORT, () => {
    console.log(`Server is running on port:`, `http://localhost:${PORT}`)
})