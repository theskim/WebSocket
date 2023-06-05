import { WebSocketServer } from "ws";

const port = 1234;
const wss = new WebSocketServer({port});

console.log(`Listening at ${port}...`);

wss.on('connection', (ws) => {
    ws.on('message', (data) => {
        console.log(`Received message: ${data}`);
    })

    ws.send(`Hello world.`);
})

console.log(`Listening at ${port}...`);