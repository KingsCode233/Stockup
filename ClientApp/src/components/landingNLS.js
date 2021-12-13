import React from "react";
import logoName from "../images/logoName.svg";
import logo from "../images/logo.svg";

const LandingNLS = () => {
  return (
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
  );
};

export default LandingNLS;
