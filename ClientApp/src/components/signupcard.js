import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./styled_components";

const SignUpCard = () => {
  return (
    <div>
      <h1 className="text-4xl my-2 font-extrabold text-black">
        Create an account
      </h1>
      <div className=" text-lg flex justify-between my-8">
        <p>Enter you details below</p>
        <p className="text-teal">
          <Link to="/signincard">Sign in</Link>
        </p>
      </div>
      <form className="flex-col h-auto items-center space-y-10 pt-5">
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
