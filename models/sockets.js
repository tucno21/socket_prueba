

class Sockets {

    constructor(io) {
        this.io = io;
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', (socket) => {
            // Escuchar evento: mensaje-to-server
            socket.on('mensaje-cliente', (data) => {
                console.log(data);
                this.io.emit('mensaje-servidor', data);
            });
        });
    }

}

module.exports = Sockets;