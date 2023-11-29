import {FacebookAuthProvider,signInWithPopup} from 'firebase/auth'
import { fireBaseAuth } from '../context/Context';




const SignUpUserWithFB = () =>{
    const FacebookAuth = new FacebookAuthProvider();
signInWithPopup(fireBaseAuth,FacebookAuth);
}


export default SignUpUserWithFB;