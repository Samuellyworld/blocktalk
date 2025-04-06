import http from "http";
import {env} from "./config/env";
import websocket from "./socket";
import router from "./routes/root";
// import app
import { app } from "./app";


const server = http.createServer(app);

// Initialize WebSocket BEFORE routes
websocket.init(server, app);

// NOW apply routes
app.use("/api/v1", router);

websocket.init(server, app);

//server listen
server.listen(env.PORT || 5000, () => {
  console.log(`Listening on port ${env.PORT || 5000}`);
});