import { useState } from "react";
import SignIn from "./signin/SignIn";
import SignUp from "./signup/SignUp";

const Status = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {isLoggedIn ? (
        <SignIn />
      ) : (
        <SignUp
          onsucessFullSignUp={() => {
            setIsLoggedIn(true);
          }}
        />
      )}
    </>
  );
};

export default Status;
