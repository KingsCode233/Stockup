import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./styled_components";
import googleLogo from "../images/google-logo.svg";

const SignUpCard = () => {
  return (
    <div>
      <div className=" flex-col items-center justify-between">
        <p className="text-teal text-base text-right">
          <Link to="/signincard">Sign in</Link>
        </p>
        <h1 className="text-2xl my-2 font-extrabold text-black">
          Create an account
        </h1>
        <div className="googleSignIn flex items-center justify-center mt-10 mb-6  w-full">
          <img className="h-6 w-1/6" src={googleLogo} alt="google logo" />
          <a>
            <p>Sign up with Google</p>
          </a>
        </div>
        <p className="text-center text-teal mb-6">or</p>
      </div>
      <p className="text-sm my-3">Enter your details below</p>
      <form className="flex-col h-auto items-center space-y-6 pt-5">
        <div>
          <label for="name">Enter your name</label>
          <input className="grid w-full h-6"></input>
          <hr className="border-t border-teal" />
        </div>
        <div>
          <label>Email address</label>
          <input className="grid w-full h-6" type="email"></input>
          <hr className="border-t border-teal" />
        </div>
        <div>
          <label>Enter Password</label>
          <input className="grid w-full h-6" type="password"></input>
          <hr className="border-t border-teal" />
        </div>
        <div>
          <label>Re-enter password</label>
          <input className="grid w-full h-6" type="password"></input>
          <hr className="border-t border-teal" />
        </div>
        <div className="text-teal pt-2">
          <input className="border border-teal" type="checkbox"></input>
          <label className="ml-2 font-medium">Remember me</label>
        </div>
        <div className="flex justify-end items-end w-full">
          <Button type="submit">Create account</Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpCard;
