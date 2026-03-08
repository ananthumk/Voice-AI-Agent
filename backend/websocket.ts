import WebSocket, { WebSocketServer } from "ws"

const wss = new WebSocketServer({ port: 8080 })

wss.on("connection", (ws: WebSocket) => {

  console.log("Client connected")

  ws.on("message", async (audio: WebSocket.RawData) => {

    console.log("Audio received")

  })

})