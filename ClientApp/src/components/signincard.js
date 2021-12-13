import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./styled_components";
import googleLogo from "../images/google-logo.svg";

const SignInCard = () => {
  return (
    <div>
      <div className="flex-col items-center justify-between">
        <p className="text-teal text-base text-right">
          <Link to="/signupcard">Create an account</Link>
        </p>
        <h1 className="text-2xl my-2 font-extrabold text-black">Sign in</h1>
        <div className="googleSignIn flex items-center justify-center mt-10 mb-6  w-full">
          <img className="h-6 w-1/6" src={googleLogo} alt="google logo" />
          <a>
            <p>Sign in with Google</p>
          </a>
        </div>
        <p className="text-center text-teal mb-6">or</p>
      </div>
      <p className="my-3 text-sm">Enter your email and password below</p>
      <form className="flex-col h-auto items-center space-y-8 pt-5">
        <div>
          <label>Email address</label>
          <input className="grid w-full h-6" type="email"></input>
          <hr className="border-t border-teal" />
        </div>
        <div>
          <label>Enter Password</label>
          <input className="grid w-full h-6" type="password"></input>
          <hr className="border-t border-teal" />
          <p className="text-teal mt-5">
            <a href="#top">Forgot password</a>
          </p>
        </div>
        <div className="text-teal items-center">
          <input className="border border-teal" type="checkbox"></input>
          <label className="ml-2 font-medium">Remember me</label>
        </div>
        <div className="flex justify-end items-end w-full pb-6 pt-12">
          <Button type="submit">Sign in</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInCard;
