const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //http server
        this.server = http.createServer(this.app);

        //configuracion de socket.io
        this.io = socketio(this.server, {
            /* configuraciones */
        });
    }

    middlewares() {
        //desplegar el directorio publico
        this.app.use(express.static(path.resolve(__dirname, '../public')));

        //cors
        this.app.use(cors());
    }

    configSockets() {
        new Sockets(this.io);
    }

    execute() {
        //inicializar middlewares
        this.middlewares();

        // //inicializar sockets
        this.configSockets();

        //inicializar server
        this.server.listen(this.port, () => {
            console.log('servidor corriendo' + this.port);
        });
    }
}

module.exports = Server;