import { createContext } from "react";
import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
// import UserLoginWithEmail from "../Utility/CreateUser";
import CreateUser from "../Utility/CreateUser";
import SignUpUserWithMail from "../Utility/SignUpUserWIthMail";
import SignUpUserWithFB from "../Utility/SignUpUserWithFB";


// connect your app wd firebse app

// 1.firebaseconfig 

const firebaseConfig = {
    apiKey: "AIzaSyC1LET-VvUrvcmb84X67s9q_yqI-ETFu1M",
    authDomain: "dummapp-cfd27.firebaseapp.com",
    projectId: "dummapp-cfd27",
    storageBucket: "dummapp-cfd27.appspot.com",
    messagingSenderId: "897206616387",
    appId: "1:897206616387:web:a684f06e04596088f1aff6"
};

const fireBaseApp = initializeApp(firebaseConfig);

// to use firebase authentication do the following 
// a. create a instance of the getAuth

export const fireBaseAuth = getAuth(fireBaseApp);



// context created 
export  const FireBaseContext = createContext(null);

export  const FireBaseContextProvider = (props) =>{


    return(
        <FireBaseContext.Provider value={{ CreateUser , SignUpUserWithMail  , SignUpUserWithFB}}>
            {props.children}
        </FireBaseContext.Provider>
    )
}