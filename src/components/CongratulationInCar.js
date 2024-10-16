// import React from 'react'
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
import { MdOutlineModeEdit } from "react-icons/md";

const CongratulationInCar = () => {

    const navigate = useNavigate();

    function goToRealEstate(){
        navigate('/cars');
    }

  return (
    <div className='flex flex-col items-center gap-[40px] leftPart text-white my-[30px]'>
                {/* <div className='hiddenImage   w-[400px] h-[250px]'><img className='rounded-[15px] h-[100%] w-[100%]' src={info.image}></img></div> */}
                {/* First Info */}
                <div className='border firstInfo border-[#283141] w-[800px] py-[25px] px-[20px] rounded-[12px] flex flex-col gap-[25px]'>
                    {/* Wooden info */}




                    {/* Name */}
                    <div className='font-semibold infoTitle text-6xl text-[#e5e7eb]'>Congratulations 🎉</div>



                    {/* Line Seperation */}
                    <div className='bg-[#323b4b] h-[1px] w-full'></div>

                    {/* Features */}
                    <div className='font-semibold text-2xl'>Your Car has been Booked!</div>

                    <div className='flex items-center w-[100%]'>
                        <div className='flex items-center text-[#939aa6] border border-[#283141] w-[50%] py-[20px] px-[15px] justify-between rounded-l-[18px]'>
                            <div>
                                <div>Date</div>
                                <div className='font-semibold text-xl text-[#d9dbdf]'>Feb 06 - Feb 23</div>
                            </div>
                            <MdOutlineModeEdit size={25} />
                        </div>
                        <div className='flex items-center text-[#939aa6] border border-[#283141] w-[50%] py-[20px] px-[15px] justify-between rounded-r-[18px]'>
                            <div>
                                <div>Seats</div>
                                <div className='font-semibold text-xl text-[#d9dbdf]'>2 adults, 1 infant</div>
                            </div>
                            <MdOutlineModeEdit size={25} />
                        </div>
                    </div>


                    <div className='font-semibold text-2xl'>
                        Booking Detail
                    </div>


                   <div className='flex items-center w-[100%]'>
                    <div className='text-[#b7bbc3] w-[50%] flex flex-col gap-[10px]'>
                        <div>Booking code</div>
                        <div>Date</div>
                        <div>Total</div>
                        <div>Payment method</div>
                    </div>
                    <div className=' flex flex-col w-[50%] gap-[10px]'>
                        <div>#222-333-111</div>
                        <div>12 Aug, 2021</div>
                        <div>$199</div>
                        <div>Credit card</div>
                    </div>
                    <div></div>
                   </div>

                    <div onClick={goToRealEstate} className='text-base bg-[#4f46e5] w-fit font-semibold p-[10px] px-[30px] hover:cursor-pointer rounded-full'>Explore More Cars</div>
                </div>

                {/* Stay Information */}
               


            </div>
  )
}

export default CongratulationInCar;
