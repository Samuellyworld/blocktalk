import { Server as SocketIOServer } from "socket.io";

declare global {
    namespace Express {
        interface Request {
            io?: SocketIOServer;
        }
    }
}