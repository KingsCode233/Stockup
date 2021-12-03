import React from "react";
import logoName from "../images/logoName.svg";
import logo from "../images/logo.svg";

const LandingNLS = () => {
  return (
    <div className="container flex-col my-auto w-2/4 pl-40">
      {/* Company Name & Logo */}
      <div className=" container flex items-center">
        <img className="h-15" src={logo} alt="company logo" />
        <img
          className="h-10 ml-2 mt-3"
          src={logoName}
          alt="company name logo "
        />
      </div>
      {/* SignIn/Up choice */}
      <p className="text-white text-left text-2xl mt-4">
        Sign in or Create a new account
      </p>
    </div>
  );
};

export default LandingNLS;