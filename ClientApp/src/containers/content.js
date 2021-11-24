import React from "react";
import Card from "../components/card";
import LandingNLS from "../components/landingNLS";

const ContentLanding = () => {
  return (
    <div className="container flex h-full m-auto">
      {/* Name/logo && SignIn/Up choice */}
      <LandingNLS />
      {/* Card Container */}
      <div className="container flex w-2/4 h-full mx-10 px-10">
        <Card />
      </div>
    </div>
  );
};

export default ContentLanding;
