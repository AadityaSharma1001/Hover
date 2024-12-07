import React , { useState, useContext } from 'react'
import hover_black from './hover-black.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainLogin = () => {
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  // const [captainData,setCaptainData] =useState({});

  const navigate = useNavigate();

  const { captain, setCaptain } = useContext(CaptainDataContext);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const captainData = {
      email,
      password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captainData
    );

    if(response.status === 200){
      const data = response.data;
      setCaptain(data);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }
    setEmail("");
    setPassword(""); 
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-16 mb-3" src={hover_black}></img>
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-medium mb-2">What's our Captain's email</h3>
          <input
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="Email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">What's our Captain's password</h3>

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
          <p className="text-center">Join a fleet? <Link to='/captain-signup' className="text-blue-600">Register as a Captain</Link></p>
        </form>
      </div>
      <div>
        <Link
        to='/login'
        className="bg-[#111] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
        >Sign in as User</Link>
      </div>
    </div>
  );
}

export default CaptainLogin
