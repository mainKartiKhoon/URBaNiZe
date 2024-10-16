import React from 'react'
import "./AboutUs.css"
import firstImage from "../assets/aboutUsFirst.png"

const AboutUs = () => {
  return (
    <div className='text-white about flex justify-center items-center py-[100px] w-[100%]  gap-[20px]'>
      {/* //? Left side */}
      <div className='w-[640px] firstInAbout  flex flex-col gap-[30px]'>
        <h3 className='text-5xl font-bold'>👋 About Us.</h3>
        <p className='text-[#9299a5] text-lg'>We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world.</p>
      </div>

      {/* //? Right sidde image */}
      <div className='outsideAbout w-[690px]'><img className='imageInAbout' src={firstImage}></img></div>
      
    </div>
  )
}

export default AboutUs
