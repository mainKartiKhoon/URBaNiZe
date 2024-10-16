import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Login.css"
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';
import { RandomBoolContext } from '../context/RandomBoolContext';
// import { RandomBoolContext } from '../context/RandomBoolContext';



const Login = () => {

  let RandomBool = useContext(RandomBoolContext);
  const navigate = useNavigate();
  function handleLoginClick() {
    RandomBool.setIsLogin(!RandomBool.isLogin);
  }

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleLogin = () => {

    const loggedUser = JSON.parse(localStorage.getItem("user"))
    
    if (input.email === loggedUser.email && input.password === loggedUser.password) {
        // console.log(loggedUser.name);
        
        RandomBool.setIsLoggedIn(true);
        
        navigate("/")
    }
    else {
      alert('Invalid Credentials')
    }
  }

  return (
    <div className='outsideMain text-white flex flex-col items-center justify-center py-[100px] px-[50px]'>
      <div className='mainBoxLogin flex flex-col items-center w-[460px] '>
        {/* //? Login */}
        <div className='text-5xl font-semibold mb-[70px] heading' >Login</div>

        {/* //? Three Boxes */}
        <div className='w-[100%] flex flex-col gap-[10px]'>
          <div className='bg-[#1f2937] w-[100%] relative rounded-[8px] py-[10px]'>
            <FaFacebookSquare fontSize={25} color='#3b61a2' className='absolute top-[9px] left-[12px]' />
            <div className='text-center text-sm text-[#cdd1d7]'>Continue with Facebook</div>
          </div>
          <div className='bg-[#1f2937] w-[100%] relative rounded-[8px] py-[10px]'>
            <FaTwitter fontSize={25} color='black' className='absolute top-[9px] left-[12px]' />
            <div className='text-center text-sm text-[#cdd1d7]'>Continue with Twitter</div>
          </div>
          <div className='bg-[#1f2937] w-[100%] relative rounded-[8px] py-[10px]'>
            <FcGoogle fontSize={25} className='absolute top-[9px] left-[12px]' />
            <div className='text-center text-sm text-[#cdd1d7]'>Continue with Google</div>
          </div>
        </div>



        {/* //? Or line */}
        {/*  */}
        <div className='flex w-[100%] items-center gap-[15px] my-[25px]'>
          <div className='w-[100%] h-[1px] bg-[#1f2937]'></div>
          <div className='text-[#959ca8] text-sm'>OR</div>
          <div className='w-[100%] h-[1px]  bg-[#1f2937]'></div>
        </div>

        {/* //? Form */}
        <form onSubmit={handleLogin} className='w-[100%] flex flex-col gap-[20px] mb-[20px] justify-center'>
          {/* //? Email */}
          <div className='w-[100%]'>
            {/* //? Text email */}
            <div className='text-base mb-[10px] text-[#d8d8db]'>Email address</div>

            {/* //? Input */}
            <input type='email' name='email' value={input.email} onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} placeholder='example@example.com' className=' pl-[20px] bg-[#111827] rounded-[15px] p-[10px] border text-sm text-[#69707e] border-[#283141] w-[100%]'></input>
          </div>

          {/* //? Password */}
          <div className='w-[100%]'>
            {/* // Text div */}
            <div className='flex mb-[10px] justify-between items-center w-[100%]'>
              {/* //? Password */}
              <div className='text-[#d8d8db]'>Password</div>

              {/* //? Forgeot Password */}
              <div className='text-[#d8d8db] text-sm'>Forgot Password?</div>

            </div>

            <input type='password' name='password' value={input.password} onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} className=' pl-[20px] bg-[#111827] rounded-[15px] p-[10px] w-[100%] border text-sm text-[#69707e] border-[#283141]'></input>
          </div>

          {/* //? Continue  */}
          <button className='bg-[#4f46e5] text-white py-[10px] rounded-full w-[100%]'>Login</button>
        </form>

        {/* //? New user? */}
        <div onClick = { handleLoginClick } className='text-base text-[#a1a6ae]'>New user? <Link to="/signup"><span className='hover:cursor-pointer hover:text-white'>Create an Account</span></Link></div>


      </div>



    </div>
  )
}

export default Login
