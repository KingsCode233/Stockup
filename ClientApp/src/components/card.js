import React from "react";
import SignInCard from "./signincard";
import SignUpCard from "./signupcard";
// import ReactDom from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Card = () => {
  return (
    <div className="card container m-auto flex-col p-10 h-auto w-10/12 self-center justify-center rounded-xl bg-white text-gray-700 text-left text-xs">
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
