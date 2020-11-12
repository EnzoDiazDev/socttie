import "reflect-metadata";
import { Server as httpServer } from "http";
import * as SocketIO from "socket.io";

export default class Socttie {
    readonly server:httpServer
    readonly io:SocketIO.Server

    constructor(_server:httpServer, options?:SocketIO.ServerOptions){
        this.server = _server;
        this.io = new SocketIO.Server(this.server, options);
    }

    /**
     * Añade una extensión, una clase (no una instancia) con el decorador `@Controller` para dotar de listeners y emiters al servidor socket.
     * @param Extension Cualquier clase con el decorador `@Extension`
     * @see https://github.com/lottielabs/socttie#Extensiones
     */
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public add_extension(Extension):Socttie {
        try {
            const instance = new Extension();
            const namespace = Reflect.getMetadata("namespace", Extension);
            const listeners = Reflect.getMetadata("listeners", Extension);
            const emiters = Reflect.getMetadata("emiters", Extension);

            listeners.forEach(listener => {
                if(!namespace || namespace === "/" || namespace === "default"){
                    this.io.on(listener.event, listener.method_name);
                }
            });

            /* implementar extension */
            return this;
        } catch (e) {
            console.error(e);
            throw new Error("This extension is not valid");
        }
    }
}
