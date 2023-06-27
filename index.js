const Server = require("./models/server");
require('dotenv').config();

const server = new Server();

server.execute();

// //servidor de express
// const express = require('express');
// const app = express();
// //creando servidor http
// const server = require('http').createServer(app);
// //configuracion de socket.io
// const io = require('socket.io')(server);


// //desplegar el directorio publico
// app.use(express.static(__dirname + '/public'));


// //
// io.on('connection', (socket) => {
//     console.log('cliente conectado');
//     //enviar mensaje al cliente
//     // socket.emit('mensaje-bienvenida', {
//     //     'mensaje': 'Bienvenido al servidor',
//     //     'autor': 'Servidor'
//     // });

//     //recibir mensaje del cliente
//     socket.on('mensaje-cliente', (data) => {
//         console.log(data);

//         //enviar mensaje a todos los clientes
//         io.emit('mensaje-servidor', data);
//     });
// });

// //
// server.listen(8080, () => {
//     console.log('servidor corriendo en http://localhost:8080');
// });