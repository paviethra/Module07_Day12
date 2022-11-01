const express = require('express');
const app = express();
const port = 3000;
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server)

app.use(express.static('public'));

app.listen(port,()=>{
    console.log(`Listening to the port ${port}`);
});

io.sockets.on('connection', (socket) => {
	console.log('Client connected: ' + socket.id);
	socket.on('mouse', (data) => socket.broadcast.emit('mouse', data));
	socket.on('disconnect', () => console.log('Client has disconnected'));
});
