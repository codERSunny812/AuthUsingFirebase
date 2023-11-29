import { useContext } from "react"
import { FireBaseContext } from "../context/Context"


const useFireBase = () =>{
    const fireBaseContext = useContext(FireBaseContext);
    if(!fireBaseContext){
        throw console.error("context not  found ");
    }
    return fireBaseContext;
}

export default useFireBase;