import {listener} from "../utils/types";

export default function On(event:string):MethodDecorator {
    return (target, method_name) => {
        if (!Reflect.hasMetadata("listeners", target.constructor))
            Reflect.defineMetadata("listeners", [], target.constructor);

        const listeners = Reflect.getMetadata("listeners", target.constructor) as Array<listener>;

        let listener_i = -1;
        const listener = listeners.find((listener, index:number) => {
            if(listener.method_name === method_name) {
                listener_i = index;
                return true;
            } else return false;
        });

        if(listener) {
            /* Este condicional es para hacer cosas después */
        } else {
            listeners.push({
                event: event,
                method_name: method_name as string
            });
        }

        Reflect.defineMetadata("listeners", listeners, target.constructor);
    };
}
