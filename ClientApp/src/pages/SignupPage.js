import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/styled_components";
import googleLogo from "../assets/images/google-logo.svg";
import logoName from "../assets/images/logoName.svg";
import logo from "../assets/images/logo.svg";

const SignupPage = () => {
  return (
    <div className=" landingpage sm:flex w-full h-screen bg-gray-700 bg-landing-img bg-no-repeat bg-center bg-cover bg-blend-overlay overflow-auto sm:overflow-hidden">
      {/* Name/logo && SignIn/Up choice */}
      <div className="flex sm:w-1/2 my-auto ">
        <div className="flex-col h-1/6 py-10 sm:ml-4 sm:my-auto ml-8 sm:justify-center">
          {/* Company Name & Logo */}
          <div className=" flex items-center ">
            <img className="h-10 md:h-14" src={logo} alt="company logo" />
            <img
              className="h-8 md:h-10 ml-2 mt-3"
              src={logoName}
              alt="company name logo "
            />
          </div>
          {/* SignIn/Up choice */}
          <p className="text-white text-left text-base md:text-2xl mt-4 hidden sm:block">
            Sign in or Create a new account
          </p>
        </div>
      </div>

      {/* Card Container */}
      <div className="sm:my-auto sm:w-1/2 md:p-12 h-screen md:w-4/6 lg:w-3/5 lg:px-20 xl:px-32">
        <div className="bg-white md:rounded-xl p-10 text-left text-xs sm:overflow-y-auto h-full">
          <div className=" flex-col items-center justify-between">
            <p className="text-teal text-base text-right">
              <Link to="/login">Sign in</Link>
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
      </div>
    </div>
  );
};

export default SignupPage;
