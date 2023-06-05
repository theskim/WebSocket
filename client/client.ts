import WebSocket from "ws";

const port = 1234;
const ws = new WebSocket(`ws://localhost:${port}`);

ws.on('open', () => {
    console.log(`Client Connected`);
    ws.send(`Hello from client`);
});

ws.on('message', (data) => {
    console.log(`Received a message: ${data}`);
});