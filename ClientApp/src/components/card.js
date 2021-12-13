import React from "react";
import SignInCard from "./signincard";
import SignUpCard from "./signupcard";
// import ReactDom from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Card = () => {
  return (
    <div className="bg-white md:rounded-xl p-10 text-left text-xs sm:overflow-y-auto h-full">
      {/* {false ? <SignInCard /> : <SignUpCard />} */}
      <BrowserRouter>
        <Routes>
          <Route path="/signincard" element={<SignInCard />} />
          <Route path="/signupcard" element={<SignUpCard />} />
          <Route path="/" element={<SignUpCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Card;

{
  /* <div className="card sm:h-5/6 sm:w-3/5 sm:my-auto sm:rounded-xl p-10 bg-white text-gray-700 text-left text-xs overflow-y-scroll md:w1/2 md:mx-10 md:rounded-xl lg:my-20 lg:mx-20"></div> */
}
