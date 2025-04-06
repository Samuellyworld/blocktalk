import { Server } from "socket.io";
// import { corsSettings } from "../settings.js";

const websocketServer = {
  io: null,
  init: function (server, app) {
    // initialize socket server
    const io = new Server(server, {
      cors: {
        origin: ["https://your-frontend-domain.com", "http://localhost:5173", "https://your-production-frontend.com"],
        methods: ["GET", "POST", "OPTIONS"],
        allowedHeaders: ["*"],
        credentials: true
      },
      path: "/api/v1/socket.io/",
      pingTimeout: 60000, // Increase timeouts for more stability
      pingInterval: 25000
    });
    
    this.io = io;
    
    io.on("connection", socket => {
      console.log(`New socket connection: ${socket.id}`);
      
      // Basic ping/pong
      socket.on("ping", () => {
        socket.emit("pong");
      });
      
      // Add this handler for joining rooms
      socket.on("join", (data) => {
        if (data && data.room) {
          socket.join(data.room);
          console.log(`Socket ${socket.id} joined room: ${data.room}`);
        }
      });
      
      // Handle disconnection
      socket.on("disconnect", () => {
        console.log(`Socket disconnected: ${socket.id}`);
      });
    });
    
    // bind io to request object
    app.use((req, res, next) => {
      req.io = io;
      next();
    });
    
    return io;
  }
};

export default websocketServer;