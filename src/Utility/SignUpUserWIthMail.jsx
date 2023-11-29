import {GoogleAuthProvider ,signInWithPopup} from 'firebase/auth'
import { fireBaseAuth } from '../context/Context';



const SignUpUserWithMail = () =>{

    const googleAuthProvider = new GoogleAuthProvider();

    signInWithPopup(fireBaseAuth,googleAuthProvider);

    
    


}


export default SignUpUserWithMail;