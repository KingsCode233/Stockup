import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./styled_components";

const SignInCard = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl my-2 font-extrabold text-black">Sign in</h1>
        <p className="text-teal text-lg flex justify-between my-8">
          <Link to="/signupcard">Create an account</Link>
        </p>
      </div>
      <p className="my-3 text-lg">Enter your email and password below</p>
      <form className="flex-col h-auto items-center space-y-10 pt-5">
        <div>
          <label>Email address</label>
          <input className="grid w-full h-6" type="email"></input>
          <hr className="border-t border-teal" />
        </div>
        <div>
          <label>Enter Password</label>
          <input className="grid w-full h-6" type="password"></input>
          <hr className="border-t border-teal" />
          <p className="text-teal mt-4">
            <a href="#top">Forgot password</a>
          </p>
        </div>
        <div className="text-teal items-center">
          <input className="border border-teal" type="checkbox"></input>
          <label className="ml-2 font-medium">Remember me</label>
        </div>
        <div className="flex justify-end items-end w-full">
          <Button type="submit">Sign in</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInCard;
