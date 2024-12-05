import React, { useState } from 'react'
import hover_black from './hover-black.png'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainSignup = () => {

  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  const [firstname,setFirstName] =useState("");
  const [lastname,setLastName] =useState("");
  const [userData,setUserData] =useState({});

  const {captain , setCaptain} = useContext(CaptainDataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({fullname:{firstname:firstname, lastname:lastname},email:email,password:password});
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="py-5 px-5 h-screen flex flex-col justify-between">
      <div>
        <img className="w-16 mb-3" src={hover_black}></img>
        <form onSubmit={handleSubmit}>
        <h3 className="text-lg font-medium mb-2">What's our Captain's name</h3>
        <div className='flex gap-4 mb-5'>
        <input
            required
            value={firstname}
            onChange={(e)=>setFirstName(e.target.value)}
            className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base"
            type="text"
            placeholder="First Name"
          />
          <input
            required
            value={lastname}
            onChange={(e)=>setLastName(e.target.value)}
            className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base"
            type="text"
            placeholder="Last Name"
          />
        </div>
          <h3 className="text-lg font-medium mb-2">What's our Captain's email</h3>
          <input
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-base"
            type="email"
            placeholder="Email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">What's our Captain's password</h3>

          <input
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-base"
            type="password"
            placeholder="Password"
          />
          <button
          className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Join Fleet
          </button>
          <p className="text-center">Already have a account? <Link to='/captain-login' className="text-blue-600">Login here</Link></p>
        </form>
      </div>
      <div>
        <p className='text-xs'>
          By continuing, you agree to Hover's Conditions of Use and Privacy Notice
        </p>
      </div>
    </div>
  )
}

export default CaptainSignup
