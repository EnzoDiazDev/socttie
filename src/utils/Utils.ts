import Namespace from "./Namespace";

export default class Utils {
    /**
     * @param ext una extension
     */
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public static is_namespace(ext:any): ext is Namespace {
        if(
            "on_connect" in ext
        ) return true;
        else return false;
    }
}
