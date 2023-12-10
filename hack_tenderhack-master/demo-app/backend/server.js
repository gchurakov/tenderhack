const express = require('express');
const WebSocket = require('ws');

const app = express();

const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

const server = app.listen(3000, () => {
  console.log('Server started on port 3000');
});

server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});
