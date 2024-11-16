let isFull = false;

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));
app.use(express.json());

app.post('/status', (req, res) => {
    console.log('Permintaan POST diterima:', req.body); // Log untuk memastikan permintaan diterima
    const status = req.body.status;
    isFull = status === 'Penuh';
    io.emit('statusUpdate', status); // Emit event ke klien
    res.sendStatus(200);
});



app.get('/status', (req, res) => {
    res.send(isFull ? 'Penuh' : 'Belum Penuh');
});

server.listen(3001, () => {
    console.log('Server berjalan di http://localhost:3001');
});