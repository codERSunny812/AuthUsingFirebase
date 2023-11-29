import { fireBaseAuth } from "../context/Context";
import {createUserWithEmailAndPassword} from 'firebase/auth'

    const CreateUser = async (email,password) => {
        try {
            const UserCredential = createUserWithEmailAndPassword(fireBaseAuth,email,password);
            console.log("user Created successfully ");
            return UserCredential;
        } catch (error) {
            console.log(error+"user not created");
        }

    }
export default CreateUser;