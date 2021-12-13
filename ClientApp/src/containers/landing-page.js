import React from "react";
import Card from "../components/card";
import LandingNLS from "../components/landingNLS";

const LandingBack = () => {
  return (
    <div className=" landingpage sm:flex w-full h-screen bg-gray-700 bg-landing-img bg-no-repeat bg-center bg-cover bg-blend-overlay overflow-auto sm:overflow-hidden">
      {/* Name/logo && SignIn/Up choice */}
      <div className="flex sm:w-1/2 my-auto ">
        <LandingNLS />
      </div>
      {/* Card Container */}
      <div className="sm:my-auto sm:w-1/2 md:p-12 h-screen md:w-4/6 lg:w-3/5 lg:px-20 xl:px-32">
        <Card />
      </div>
    </div>
  );
};

export default LandingBack;
