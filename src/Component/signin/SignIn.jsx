import React, { useState } from "react";
import "./signin.css";
import signinAnim from "./signin.json";
import Lottie from "lottie-react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";


const SignIn = () => {
    return (
        <>
            <div className="loginContainer">
                <div className="mainsigninContainer">
                    <div className="animation">
                        <Lottie animationData={signinAnim} className="signinAnim" />
                    </div>

                    <div className="signinInfo">
                        <h3>sign in</h3>

                        <div className="signinData">
                            <div className="signinEmail">
                                <MdEmail />
                                <input type="email" placeholder="enter your email" id="email"  />
                            </div>
                            <div className="signinPassWord">
                                <RiLockPasswordFill />
                                <input type="password" placeholder=" enter your password" id="password" />
                            </div>

                            <button type="submit" className="signinButton" id="btn">
                                sign in
                            </button>
                        </div>

                        <div className="endsigninData">
                            <h4>or login with</h4>
                            <div className="socialMediaOne">
                                <FcGoogle />
                                <label> log in with google</label>
                            </div>
                            <div className="socialMediaTwo">
                                <FaFacebookF />
                                <label>log in with facebook </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
