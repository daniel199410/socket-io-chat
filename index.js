const express = require('express');
const path = require('path');
const SocketIO = require('socket.io');

const app = express();
app.set('port', process.env.PORT || 5000);
app.use(express.static(path.join(__dirname, 'public')));

const server = app.listen(app.get('port'), () => console.log('Server on port', app.get('port')));

const io = SocketIO(server);

io.on('connection', socket => console.log('New connection', socket.id));