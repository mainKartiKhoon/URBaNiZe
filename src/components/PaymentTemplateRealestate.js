

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
import { RealEstateContext } from '../context/RealEstate'

const PaymentTemplateRealestate = () => {

    const realestateTemplate = useContext(RealEstateContext);
    const navigate = useNavigate();
    let info = realestateTemplate.currObjectInRealEstate;

    function congrats() {
        navigate('/congrats');
    }

    return (
        <div className='text-white flex flex-wrap justify-center gap-[40px] my-[40px] mainTemplate relative'>
            {/* Left Part */}
            <div className='flex flex-col items-center gap-[40px] leftPart'>
                {/* <div className='hiddenImage   w-[400px] h-[250px]'><img className='rounded-[15px] h-[100%] w-[100%]' src={info.image}></img></div> */}
                {/* First Info */}
                <div className='border firstInfo border-[#283141] w-[800px] py-[25px] px-[20px] rounded-[12px] flex flex-col gap-[25px]'>
                    {/* Wooden info */}




                    {/* Name */}
                    <div className='font-semibold infoTitle text-4xl text-[#e5e7eb]'>Confirm And Payment</div>



                    {/* Line Seperation */}
                    <div className='bg-[#323b4b] h-[1px] w-full'></div>

                    {/* Features */}
                    <div className='font-semibold text-2xl'>Your Trip</div>

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
                                <div>Guests</div>
                                <div className='font-semibold text-xl text-[#d9dbdf]'>2 adults, 1 infant</div>
                            </div>
                            <MdOutlineModeEdit size={25} />
                        </div>
                    </div>


                    <div className='font-semibold text-2xl'>
                        Pay With
                    </div>


                    <div className='h-[1px] bg-[#323b4b] ml-[5px] w-[70px]'></div>

                    <div className='flex items-center gap-[20px]'>
                        <div className='text-[#111827] p-[10px] px-[20px] bg-white rounded-full text-base'>PayPal</div>
                        <div>Credit Card</div>
                    </div>

                    <div className='flex flex-col gap-[5px]'>
                        <div>Card Number</div>
                        <input type='text' value='1112 6574 3777' className='bg-[#111827] w-[100%] border border-[#424c5d] rounded-[8px] px-[10px] py-[7px]'></input>
                    </div>
                    <div className='flex flex-col gap-[5px]'>
                        <div>Card Holder</div>
                        <input type='text' value='John Doe' className='bg-[#111827] w-[100%] border border-[#424c5d] rounded-[8px] px-[10px] py-[7px]'></input>
                    </div>
                    <div className='flex  items-center gap-[15px] w-[100%]'>
                        <div className='w-[50%] flex flex-col gap-[10px]'>
                            <div>Card Holder</div>
                            <input type='text' value='John Doe' className='bg-[#111827] w-[100%] border border-[#424c5d] rounded-[8px] px-[10px] py-[7px]'></input>
                        </div>
                        <div className='w-[50%] flex flex-col gap-[10px]'>
                            <div>CVC</div>
                            <input type='date' className='bg-[#111827] w-[100%] border border-[#424c5d] rounded-[8px] px-[10px] py-[7px]' ></input>

                        </div>

                    </div>

                    <div onClick={congrats} className='text-base bg-[#4f46e5] w-fit font-semibold p-[10px] px-[30px] hover:cursor-pointer rounded-full'>Confirm And Pay</div>
                </div>

                {/* Stay Information */}
               


            </div>

            {/* Right Part */}
            <div className='flex flex-col gap-[40px] rightPart mb-[40px]'>
                {/* <div className='w-[400px] imageInRightPartTemplateCover h-[270px]'><img className='rounded-[12px] w-[100%] h-[100%] imageInRightPartTemplate' src={info.image}></img></div> */}
                <div className='border border-[#283141] w-[400px] h-fit py-[25px] px-[30px] rounded-[12px] flex flex-col gap-[12px] '>
                    {/* Price and Rating */}
                    

                    {/* data and guests */}
                    {/* <div className='my-[10px]'>
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
                    </div> */}

                    <div className='font-semibold text-2xl'>Price Details</div>

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
                    {/* <button onClick={reserveClick} className='bg-[#4f46e5] rounded-full w-full py-[10px] font-semibold mt-[10px]'>Reserve</button> */}
                </div>
            </div>


            {/* Hidden Reservation */}
           
        </div>
    )

}


export default PaymentTemplateRealestate;