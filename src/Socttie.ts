import { Server as HTTPServer } from "http";
import * as SocketIO from "socket.io";

export default class Socttie {
    private server:HTTPServer
    private io:SocketIO.Server

    constructor(_server:HTTPServer, options?:SocketIO.ServerOptions){
        this.server = _server;
        this.io = new SocketIO.Server(this.server, options);
    }


}
