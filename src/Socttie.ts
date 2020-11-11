import { Server as HTTPServer } from "http";
import { Server, ServerOptions } from "socket.io";

export default class Socttie {
    private server:HTTPServer
    private io:Server

    constructor(_server:HTTPServer, options?:ServerOptions){
        this.server = _server;
        this.io = new Server(this.server, options);
    }


}
