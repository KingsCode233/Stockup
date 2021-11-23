import React from "react";
import ContentLanding from "./content";

const LandingBack = () => {
  return (
    <div className=" container flex m-auto h-screen bg-gray-600 bg-landing-img bg-no-repeat bg-center bg-cover bg-blend-overlay min-h-screen min-w-full">
      {/* Container holding card container & name logo */}
      <ContentLanding />
    </div>
  );
};

export default LandingBack;
