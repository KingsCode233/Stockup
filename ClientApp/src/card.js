import React from "react";

const Card = () => {
  return (
    <div className="card container m-auto flex-col p-10 h-auto max-h-full w-10/12 self-center justify-center rounded-xl bg-white text-gray-700 text-left text-xs">
      <h1 className="text-3xl my-2 font-extrabold">Create an account</h1>
      <div className=" text-lg flex justify-between my-8">
        <p>Enter you details below</p>
        <p className="text-teal">Sign in</p>
      </div>
      <form className="flex-col h-3/5 items-center space-y-10 pt-5">
        <div>
          <label for="name">Enter your name</label>
          <input className="grid w-full "></input>
          <hr className="border-t border-teal" />
        </div>
        <div>
          <label>Email address</label>
          <input className="grid w-full" type="email"></input>
          <hr className="border-t border-teal" />
        </div>
        <div>
          <label>Enter Password</label>
          <input className="grid w-full" type="password"></input>
          <hr className="border-t border-teal" />
        </div>
        <div>
          <label>Re-enter password</label>
          <input className="grid w-full" type="password"></input>
          <hr className="border-t border-teal" />
        </div>
        <div className="text-teal pt-2">
          <input className="border border-teal" type="checkbox"></input>
          <label className="ml-2 font-medium">Remember me</label>
        </div>
        <div className="flex justify-end items-end w-full">
          <input
            className=" rounded-xl text-lg justify-left font-medium border-2 p-3 px-6 bg-teal text-black"
            type="submit"
            value="Create account"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Card;
