const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// when the user is connected
io.on('connection', (socket)=>{
	console.log('USUARIO CONECTADO');
	// when the user is disconnect
	socket.on('disconnect', ()=>{
	console.log('USER DISCONNECT');
	});
	socket.on('chat message', (msg)=>{
		console.log('message: ', + msg);
		io.emit('chat message', msg);
	});
});



http.listen(3000, function(){
  console.log('listening on *:3000');
});