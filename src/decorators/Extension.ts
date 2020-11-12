export default function Extension(namespace = ""):ClassDecorator {
    return (target:any) => {
        Reflect.defineMetadata("namespace", namespace, target);
        if (!Reflect.hasMetadata("listeners", target))
            Reflect.defineMetadata("listeners", [], target);
    };
}
