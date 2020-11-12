import { Socket } from "socket.io";

interface Namespace {
    on_connect:(socket:Socket) => void | Promise<void>
    on_error?:() => Error | Promise<Error>
}

export default Namespace;
