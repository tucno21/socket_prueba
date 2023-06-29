const BandList = require("./bandList");


class Sockets {

    constructor(io) {
        this.io = io;
        this.bandList = new BandList();
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', (socket) => {
            console.log('Cliente conectado');

            //enviar los datos de las bandas al cliente
            socket.emit('banda-servidor', this.bandList.getBands());

            //escuchar el voto del cliente
            socket.on('votar-banda-cliente', (id) => {
                this.bandList.increaseVotes(id);
                //emitir el cambio a todos los clientes
                this.io.emit('banda-servidor', this.bandList.getBands());
            });

            //escuchar borrar banda del cliente
            socket.on('borrar-banda-cliente', (id) => {
                this.bandList.removeBand(id);
                //emitir el cambio a todos los clientes
                this.io.emit('banda-servidor', this.bandList.getBands());
            });

            //escuchar cambiar nombre de la banda del cliente
            socket.on('cambiar-nombre-banda-cliente', ({ id, nombre }) => {
                this.bandList.changeName(id, nombre);
                //emitir el cambio a todos los clientes
                this.io.emit('banda-servidor', this.bandList.getBands());
            });

            //escuchar agregar banda del cliente
            socket.on('crear-banda-cliente', ({ nombre }) => {
                this.bandList.addBand(nombre);
                //emitir el cambio a todos los clientes
                this.io.emit('banda-servidor', this.bandList.getBands());
            });
        });
    }

}

module.exports = Sockets;