
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const faker = require('faker')

var messages = [{
	id: faker.random.uuid(),
	text: "hola soy un mensaje",
	author: "Edwin",
	send_at: '2019 - 02 - 28'
}];

function getDateNow() {
	const today = new Date()
	const date = `Send at ${today.getDate()} - ${(today.getMonth()+1)} - ${today.getFullYear()}`
	return date
}

app.get("/", function(req, res) {
	res.status(200).send("Hola mundo!");
});

io.on('connection', function(socket) {
	console.log('Alguien se ha conectado con Sockets');
	socket.emit('messages', messages);

	socket.on('new-message', function(data) {
		messages.push({id: faker.random.uuid(), ...data, send_at: getDateNow()});
		io.sockets.emit('messages', messages)
	})
});

server.listen(3001, function(){
	console.log('Servidor corriendo en el puerto 3001...')
});