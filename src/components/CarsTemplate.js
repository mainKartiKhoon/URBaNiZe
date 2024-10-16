import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
// import { RealEstateContext } from '../context/RealEstate'
import { CarsContext } from '../context/Cars'
import "./RealEstateTemplate.css"
import { IoShareOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { TbBed } from "react-icons/tb";
import { LuBath } from "react-icons/lu";
import { IoCalendarClearOutline } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";
import { GiSteeringWheel } from "react-icons/gi";
import { FaSuitcase } from "react-icons/fa6";
import { GiCarSeat } from "react-icons/gi";
import { FaUserGroup } from "react-icons/fa6";
import { IoCarSport } from "react-icons/io5";
import { FaCarAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

const CarsTemplate = () => {

  const carsTemplate = useContext(CarsContext);
  const navigate = useNavigate();
  let info = carsTemplate.currObjectInCars;

  function reserveClick() {
    navigate('/checkout');
  }

  return (
    <div className='text-white flex flex-wrap justify-center gap-[40px] mt-[40px] mainTemplate relative'>
      {/* Left Part */}
      <div className='flex flex-col items-center gap-[40px] leftPart'>
        <div className='hiddenImage   w-[400px] h-[250px]'><img className='rounded-[15px] h-[100%] w-[100%]' src={info.image}></img></div>
        {/* First Info */}
        <div className='border firstInfo border-[#283141] w-[800px] py-[25px] px-[20px] rounded-[12px] flex flex-col gap-[25px]'>
          {/* Wooden info */}
          <div className='flex items-center justify-between'>
            {/* Button */}
            <div className='text-xs text-[#2c4db4] bg-[#dbeafe] w-fit py-1 px-2 rounded-full font-semibold'>{info.company} Car</div>

            {/* Share */}
            <div className='text-sm text-[#ccd1d7] gap-[7px] flex items-center hover:bg-[#1f2937] transition-all duration-150 hover:cursor-pointer py-[7px] px-[10px] rounded-[10px]'>
              <IoShareOutline size={19} />
              <div>Share</div>
            </div>
          </div>

          {/* Name */}
          <div className='font-semibold infoTitle text-4xl text-[#e5e7eb]'>{info.name}</div>

          {/* Rating And Location */}
          <div className='flex items-center gap-[20px]'>
            {/* Rating */}
            <div className='text-sm flex gap-[6px] items-center'>
              <FaStar color='#f97316' size={16} />
              <div className='font-semibold'>{info.rating} <span className='font-normal text-[#9299a5]'>({info.reviews})</span></div>

            </div>

            <div>·</div>

            {/* Location */}
            <div className='flex items-center text-sm gap-[5px]'>
              <IoLocationOutline size={18} />
              <div>{info.location}</div>
            </div>
          </div>

          {/* Host */}
          <div className='text-normal text-[#9097a3]'>Hosted by <span className='font-semibold text-white'>Kevin Francis</span></div>

          {/* Line Seperation */}
          <div className='bg-[#323b4b] h-[1px] w-full'></div>

          {/* Features */}
          <div className='text-[#cdd1d7] w-[100%] font-semibold flex items-center gap-[40px]'>
            {/* guest */}
            <div className='text-sm flex gap-[9px] items-center'>
              <FaUserGroup size={18} />
              <div>{info.guests} <span className='textToHide1'>{info.seats} seats</span></div>
            </div>

            {/* bed */}
            <div className='text-sm flex gap-[9px] items-center'>
              <GiCarSeat size={18} />
              <div>{info.beds} <span className='textToHide1'>Luxurious Interior</span></div>

            </div>

            {/* bath */}
            <div className='text-sm flex gap-[9px] items-center'>
              <GiSteeringWheel size={18} />
              <div>{info.baths} <span className='textToHide1'>{info.gearbox}gearbox</span></div>

            </div>

            {/* bedroom */}
            <div className='text-sm flex gap-[9px] items-center'>
              <FaSuitcase size={18} />
              <div>{info.bedrooms} <span className='textToHide1'>2 bags</span></div>

            </div>
          </div>
        </div>

        {/* Stay Information */}
        <div className='border stayInfo border-[#283141] w-[800px] py-[25px] px-[20px] rounded-[12px] flex flex-col gap-[25px]'>
          {/* heading */}
          <div className='text-2xl font-semibold stayTitle'>Car Information</div>

          {/* seperator */}
          <div className='h-[1px] bg-[#3c4656] w-[50px]'></div>

          {/* para */}
          <div className='flex flex-col gap-[20px] text-[#c9cdd3] soManyParas'>
            <p>Providing lake views, The Symphony 9 Tam Coc in Ninh Binh provides accommodation, an outdoor swimming pool, a bar, a shared lounge, a garden and barbecue facilities. Complimentary WiFi is provided.</p>
            <p>There is a private bathroom with bidet in all units, along with a hairdryer and free toiletries.</p>
            <p>The Symphony 9 Tam Coc offers a terrace. Both a bicycle rental service and a car rental service are available at the accommodation, while cycling can be enjoyed nearby.</p>
          </div>
        </div>


      </div>

      {/* Right Part */}
      <div className='flex flex-col gap-[40px] rightPart mb-[40px]'>
        <div className='w-[400px] imageInRightPartTemplateCover h-[270px]'><img className='rounded-[12px] w-[100%] h-[100%] imageInRightPartTemplate' src={info.image}></img></div>
        <div className='border border-[#283141] w-[400px] h-fit py-[25px] px-[30px] rounded-[12px] flex flex-col gap-[12px] '>
          {/* Price and Rating */}
          <div className='flex items-center justify-between'>
            {/* Price */}
            <div className='text-4xl font-semibold'>${info.price} <span className='text-[#9097a3] text-base font-normal'>/day</span></div>

            {/* Rating */}
            <div className='text-sm flex gap-[6px] items-center'>
              <FaStar color='#f97316' size={16} />
              <div className='font-semibold'>{info.rating} <span className='font-normal text-[#9299a5]'>({info.reviews})</span></div>

            </div>
          </div>

          {/* data and guests */}
          <div className='my-[10px]'>
            <div className='border border-[#283141] w-[100%] rounded-t-[15px] py-[15px] px-[10px] flex items-center gap-[10px]'>
              <IoCarSport size={25} color='#9ca3af' />
              <div>
                <div className='font-semibold text-xl'>Pick Up</div>
                <div className='text-[#89909c] text-sm'>{info.location}</div>
              </div>

            </div>
            <div className='border border-[#283141] w-[100%] rounded-b-[15px] py-[15px] px-[10px] flex items-center gap-[10px]'>
              <IoCarSport color='#9ca3af' size={25} />
              <div>
                <div className='font-semibold text-xl'>{info.guests} Drop off</div>
                <div className='text-[#89909c] text-sm'>{info.location2}</div>
              </div>
            </div>
          </div>

          {/* how many nights */}
          <div className='flex items-center justify-between text-[#dde3ee]'>
            <div>${info.price} X 3 days</div>
            <div>${info.price * 3}</div>
          </div>

          {/* service charge */}
          <div className='flex items-center justify-between text-[#dde3ee]'>
            <div>Service Charge</div>
            <div>$0</div>
          </div>

          {/* seperator line */}
          <div className='h-[1px] bg-[#323b4b] w-[100%]'></div>

          {/* total */}
          <div className='flex items-center justify-between text-[#e3e5e9] font-semibold'>
            <div>Total</div>
            <div>${info.price * 3}</div>
          </div>


          {/* Reserve Button */}
          <button onClick={reserveClick} className='bg-[#4f46e5] rounded-full w-full py-[10px] font-semibold mt-[10px]'>Reserve</button>
        </div>
      </div>


      {/* Hidden Reservation */}
      <div className='bg-[#1f2937] w-[100%] flex flex-col items-center  py-[20px] border-t border-t-[#434d5b] hiddenReserve'>
        {/* BAND */}
        <div className='flex items-center justify-between band  px-[70px]'>
          {/* Price section */}
          <div>
            {/* Price */}
            <div className='text-2xl font-semibold priceInHiddenReserve'>$311<span className='font-normal text-base spanInPrice text-[#7f8793]'>/night</span></div>

            {/* date */}
            <div className='underline text-sm'>Feb 06 - Feb 23</div>
          </div>

          {/* Reservation */}
          <button onClick={reserveClick} className='bg-[#4f46e5] reserveInHidden rounded-[15px] py-[15px] px-[35px] font-semibold'>Reserve</button>
        </div>
      </div>
    </div>
  )
}

export default CarsTemplate