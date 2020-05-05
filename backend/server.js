const express = require('express');
const http = require('http');
const { readFile } = require('fs');
const { resolve } = require('path');
const WebSocket = require('ws')

const app = express();

// app.use('/assets', express.static('assets'))

// app.get('/botstrap.min.js', (req, res, next) => {
//     res.type('.js')
//     res.sendFile(resolve('./assets/'))
// })


const server = http.Server(app);
const wss = new WebSocket.Server({ server });
let number = 1;
wss.on('connection', (ws) => {

    //connection is up, let's add a simple simple event
    ws.on('message', (message) => {

        //log the received message and send it back to the client
        console.log('received: %s', message);
        ws.send(`Hello, you sent -> ${message}`);
    });
    setInterval(() => {
        number++
        console.log(number)
        ws.send(`${number}`)
    }, 100);

    //send immediatly a feedback to the incoming connection    
    // ws.send('Hi there, I am a WebSocket server');
});
server.listen(5000);
