import React from "react";

const Card = () => {
  return (
    <div className="card container flex-col p-10 h-3/4 w-11/12 self-center rounded-xl bg-white text-gray-700 text-left text-xs">
      <h1 className="text-3xl my-2 font-extrabold">Create an account</h1>
      <div className=" text-lg flex justify-between my-8">
        <p>Enter you details below</p>
        <p className="text-teal">Sign in</p>
      </div>
      <form className="flex-col space-y-10">
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
        <div className="flex h-28">
          <div className="w-2/5 text-teal">
            <input className="border border-teal" type="checkbox"></input>
            <label className="ml-2 font-medium">Remember me</label>
          </div>
          <div className="flex justify-end items-end h-28 w-3/5">
            <input
              className=" rounded-xl text-lg font-medium w-5/6 border-2 p-2 px-6 bg-teal text-black"
              type="submit"
              value="Create account"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Card;
