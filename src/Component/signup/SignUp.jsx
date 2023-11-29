import React, { useState } from "react";
import "./signup.css";
import signUpAnim from "./signupgif.json";
import Lottie from "lottie-react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import useFireBase from "../../Utility/useFireBase";

const SignUp = ({ onsucessFullSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fireBaseUse = useFireBase();
  console.log(fireBaseUse);

  const loginWithMail = async () => {
    try {
      await fireBaseUse.CreateUser(email, password);
      console.log("user created using email sucessfully");
      onsucessFullSignUp();
    } catch (error) {
      console.log(error + " error in creating user ");
    }
  };

  const mailLogin = async () => {
    try {
      await fireBaseUse.SignUpUserWithMail();
      console.log("user sucessfully login using mail ");
      onsucessFullSignUp();
    } catch (error) {
      console.log(error + "user cant login using mail");
    }
  };

  const LoginWithFB = async () => {
  try {
    await fireBaseUse.SignUpUserWithFB();
    console.log("user login using facbook sucessfully");
    onsucessFullSignUp();
    } catch (error) {
    console.log(err+"user cant login using facebook ");
  }
  }

  return (
    <>
      <div className="loginContainer">
        <div className="mainSignUpContainer">
          <div className="animation">
            <Lottie animationData={signUpAnim} className="signUpAnim" />
          </div>

          <div className="signUpInfo">
            <h3>sign up</h3>

            <div className="signUpData">
              <div className="signUpName">
                <FaUser />
                <input type="text" placeholder="your name" id="name" />
              </div>
              <div className="signUpEmail">
                <MdEmail />
                <input
                  type="email"
                  placeholder="enter your email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="signUpPassWord">
                <RiLockPasswordFill />
                <input
                  type="password"
                  placeholder=" enter your password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>

              <button
                type="submit"
                className="signUpButton"
                onClick={loginWithMail}
              >
                sign up
              </button>
            </div>

            <div className="endSignUpData">
              <h4>or connect with social media</h4>
              <div className="socialMediaOne">
                <FcGoogle className="logo" />
                <label onClick={mailLogin}>sign up with Google </label>
              </div>
              <div className="socialMediaTwo">
                <FaFacebookF className="logo" />
                <label onClick={LoginWithFB}>sign up with facebook </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
