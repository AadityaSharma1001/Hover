import React, { useState } from 'react'
import hover_black from './hover-black.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext.jsx';

const UserSignup = () => {
  
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  const [firstname,setFirstName] =useState("");
  const [lastname,setLastName] =useState("");
  // const [userData,setUserData] =useState({});

  const navigate = useNavigate();

  const { user, setUser } = React.useContext(UserDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname:{
        firstname:firstname, 
        lastname:lastname
      },
      email:email,
      password:password
    }
  
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

    if(res.status === 201){
      const data = res.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');
    }
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-16 mb-3" src={hover_black}></img>
        <form onSubmit={handleSubmit}>
        <h3 className="text-lg font-medium mb-2">What's your name</h3>
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
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-base"
            type="email"
            placeholder="Email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">What's your password</h3>

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
            Create Account
          </button>
          <p className="text-center">Already have a account? <Link to='/login' className="text-blue-600">Login here</Link></p>
        </form>
      </div>
      <div>
        <p className='text-xs'>
          By continuing, you agree to Hover's Conditions of Use and Privacy Notice
        </p>
      </div>
    </div>
  )
};

export default UserSignup
