import React, { useState } from "react";
import hover_black from "./hover-black.png";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  const [userData,setUserData] =useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({email:email,password:password});
    setEmail("");
    setPassword(""); 
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-16 mb-3" src={hover_black}></img>
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="Email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">What's your password</h3>

          <input
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="Password"
          />
          <button
          className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
          <p className="text-center">New Here? <Link to='/signup' className="text-blue-600">Create new Account</Link></p>
        </form>
      </div>
      <div>
        <Link
        to='/captain-login'
        className="bg-[#111] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
        >Sign in as Captain</Link>
      </div>
    </div>
  );
};

export default UserLogin;
