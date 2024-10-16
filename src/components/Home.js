import React, { useState } from 'react'
import "./Home.css"
import img1 from "../assets/homeAssets/firstPic.png"
import image3 from "../assets/homeAssets/secondPic.png"
import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { IoIosPersonAdd } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import PlacesComponent from './PlacesComponent';
import imag1 from "../assets/homeAssets/placeimg1.webp"
import img2 from "../assets/homeAssets/placeimg2.webp"
import img3 from "../assets/homeAssets/placeimg3.jpeg"
import img4 from "../assets/homeAssets/placeimg4.webp"
import img5 from "../assets/homeAssets/placeimg5.jpeg"
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import lastImage from "../assets/homeAssets/lastInHome.png"
import { toast } from 'react-toastify';

const Home = () => {

    const [activeButton, setActiveButton] = useState('button1');
    const handleClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <div className='bg-[#111827] pt-[50px] px-[100px] text-white page1'>

            {/* //? FIRST PAGE */}
            <div className='flex insidePage1 justify-between '>
                {/* //? First Para in Home para */}
                <div className='firstPara  w-[50%]  flex flex-col gap-[50px] pt-[30px] relative'>
                    {/* //? heading */}
                    <h2 className='text-7xl leading-[70px] headingInPage1'>Hotels, cars & experiences</h2>
                    {/* //? para */}
                    <p className='paraInFirstPara text-[#9298a4] text-lg pr-[5px]'>Accompanying us, you have a trip full of experiences. With Urbanize, you can book accommodation, resorts villas, hotels</p>
                    <button className=' bg-[#4f46e5]  rounded-[30px] p-[11px] px-[30px] w-fit  hover:bg-[#4338ca] transition-all duration-150'>Start Your Search</button>


                    {/* //? Hero Search Bar */}
                    <div className='heroSearchBar'>
                        {/* //? List */}
                        <ul className='flex pl-[80px] items-center gap-[40px]'>
                            <button className={activeButton === 'button1' ? 'activeButton' : 'inactiveButton'}
                                onClick={() => handleClick("button1")}
                            >Stays</button>
                            <button className={activeButton === 'button2' ? 'activeButton' : 'inactiveButton'}
                                onClick={() => handleClick("button2")}
                            >Experiences</button>
                            <button className={activeButton === 'button3' ? 'activeButton' : 'inactiveButton'}
                                onClick={() => handleClick("button3")}
                            >Cars</button>
                            <button className={activeButton === 'button4' ? 'activeButton' : 'inactiveButton'}
                                onClick={() => handleClick("button4")}
                            >Flights</button>
                        </ul>

                        {/* //? search */}
                        <div className='bg-[#1f2937] text-[#818894] flex items-center rounded-full p-[20px] w-[1100px] justify-between absolute top-[470px] searchBar'>
                            <div className='flex items-center gap-[10px]'>
                                <div><CiLocationOn fontSize={30} /></div>
                                <div>
                                    <h2 className='text-[#e5e7eb]'>Location</h2>
                                    <p>Where are you going?</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <div><CiCalendar fontSize={30} /></div>
                                <div>
                                    <h2 className='text-[#e5e7eb]'>Mar 01 - Mar 16</h2>
                                    <p>Date</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <div><IoIosPersonAdd fontSize={30} /></div>
                                <div>
                                    <h2 className='text-[#e5e7eb]'>4 Guests</h2>
                                    <p>Guests</p>
                                </div>
                            </div>

                            <div className='rounded-full p-[20px] bg-[#4f46e5] w-fit hover:bg-[#4338ca] hover:cursor-pointer transition-all duration-150'><IoMdSearch fontSize={30} color='white' /></div>
                        </div>

                    </div>
                </div>


                {/* //? image in home */}
                <div className='outsideImage'>
                    <img src={img1} className='image1InHome'></img>
                </div>
                {/* <div className='bg-[#1f2937] text-[#818894] flex items-center rounded-full p-[20px] w-[1100px] justify-between absolute top-[620px] searchBar'>
                    <div className='flex items-center gap-[10px]'>
                        <div><CiLocationOn fontSize={30} /></div>
                        <div>
                            <h2 className='text-[#e5e7eb]'>Location</h2>
                            <p>Where are you going?</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-[10px]'>
                        <div><CiCalendar fontSize={30} /></div>
                        <div>
                            <h2 className='text-[#e5e7eb]'>Mar 01 - Mar 16</h2>
                            <p>Date</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-[10px]'>
                        <div><IoIosPersonAdd fontSize={30} /></div>
                        <div>
                            <h2 className='text-[#e5e7eb]'>4 Guests</h2>
                            <p>Guests</p>
                        </div>
                    </div>

                    <div className='rounded-full p-[20px] bg-[#4f46e5] w-fit hover:bg-[#4338ca] hover:cursor-pointer transition-all duration-150'><IoMdSearch fontSize={30} color='white' /></div>
                </div> */}
            </div>




            {/* //? SECOND PAGE IN HOME PAGE2 */}
            <div className='page2 mt-[100px]'>
                {/* //? heading */}
                <div className='insidePage2 flex items-center justify-between'>
                    <div>
                        <h2 className='text-4xl font-bold hover:cursor-pointer'>Places to Visit</h2>
                        <p className='text-[#818894] text-lg'>For your stay</p>
                    </div>
                    <div className='iconBoxInPage2 flex items-center gap-[10px]'>
                        <div className='rounded-full border border-gray-400 p-[10px] hover:cursor-pointer hover:border-white transition-all duration-150 '><IoIosArrowBack className='arrow' fontSize={20} /></div>
                        <div className='rounded-full border border-gray-400 p-[10px] hover:cursor-pointer hover:border-white transition-all duration-150 '><IoIosArrowForward fontSize={20} className='arrow' /></div>
                    </div>
                </div>
                {/* //? bar */}
                <Link to="/realestate">
                    <div className='outsidePlaceComponent flex items-center justify-between mt-[60px]'>
                        <PlacesComponent image={imag1} name="New York" amount="188,234" />
                        <PlacesComponent image={img2} name="Singapore" amount="134,987" />
                        <PlacesComponent image={img3} name="Paris" amount="234,888" />
                        <PlacesComponent image={img4} name="London" amount="289,567" />
                        <PlacesComponent image={img5} name="Tokyo" amount="555,876" />
                    </div>
                </Link>
            </div>




            {/*  //? THIRD PAGE IN HOME PAGE3  */}
            <div className='page3 flex mt-[100px] gap-[50px] items-center w-[100%]'>
                <div className='w-[60%] firstPartPage3'><img className='imageInPage3 w-[100%]' src={image3}></img></div>
                <div className='w-[40%] secondPartPage3'>
                    <div>
                        <p className='text-[#9097a3] text-base tracking-widest mb-[15px] headingThing1'>BENEFITS</p>
                        <h2 className='text-3xl font-bold mb-[50px] headingThing2'>Happening cities</h2>

                    </div>
                    <div className=' mb-[50px]'>
                        <button className='text-xs font-bold bg-[#dbeafe] text-[#1e40af] rounded-full py-[2px] px-[10px] mb-[15px] thing1'>Advertising</button>
                        <h3 className='text-xl font-bold mb-[10px] thing2'>Cost-effective advertising</h3>
                        <p className='text-[#969da9] text-base thing3'>With a free listing, you can advertise your rental with no upfront costs</p>
                    </div>
                    <div className=' mb-[50px]'>
                        <button className='text-xs font-bold bg-[#dcfce7] text-[#166534] rounded-full py-[2px] px-[10px] mb-[15px] thing1'>Exposure</button>
                        <h3 className='text-xl font-bold mb-[10px] thing2'>Reach millions with Chisfis</h3>
                        <p className='text-[#969da9] text-base thing3'>Millions of people are searching for unique places to stay around the world</p>
                    </div>
                    <div className=' mb-[50px]'>
                        <button className='text-xs font-bold bg-[#fee2e2] text-[#9d2424] rounded-full py-[2px] px-[10px] mb-[15px] thing1'>Secure</button>
                        <h3 className='text-xl font-bold mb-[10px] thing2'>Secure and simple</h3>
                        <p className='text-[#969da9] text-base thing3'>A Holiday Lettings listing gives you a secure and easy way to take bookings and payments online</p>
                    </div>

                </div>
            </div>



            {/* //? FOURTH PAGE IN HOME PAGE4 */}
            <div className='page4 bg-[#111827] flex items-center pt-[50px] pb-[50px]'>
                <div className='firstPartInPage4 w-[40%]'>
                    <h2 className='headingInPage4 text-4xl font-bold mb-[25px]'>Join our newsletter 🎉</h2>
                    <p className='paraInPage4 text-base text-[#848b97] mb-[40px]'>Read and share new perspectives on just about any topic. Everyone’s welcome.</p>
                    <div className='nextPartInPage4 text-sm flex flex-col gap-[10px] mb-[40px]'>
                        <div className='flex items-center gap-[15px] mb-[10px]'>
                            <div className='boxInPage4 bg-[#dbeafe] py-[3px] px-[10px] text-[#2547b1] rounded-full'>01</div>
                            <div className='textBoxInPage4 text-base text-[#ced2d8] font-semibold'>Get more discount</div>
                        </div>
                        <div className='flex items-center gap-[15px]'>
                            <div className='boxInPage4 bg-[#fee2e2] py-[3px] px-[9px] text-[#a53333] rounded-full'>02</div>
                            <div className='textBoxInPage4 text-base text-[#ced2d8] font-semibold'>Get premium magazines</div>
                        </div>
                    </div>
                    <form className='relative formInPage4'>
                        <input className='formInPage4 pl-[20px] bg-[#111827] rounded-full p-[10px] border-2 text-sm text-[#69707e] border-[#1f2736]' placeholder='Enter your email'>
                        </input>

                        <button className='formInPage4button bg-[#4f46e5] absolute top-[5px] left-[253px] rounded-full p-[10px]'><FaArrowRightLong fontSize={13} /></button>
                    </form>
                </div>
                <div className='secondPartInPage4 w-[60%] p-[50px]'><img className='w-[100%]' src={lastImage}></img></div>

            </div>



        </div>

    )
}

export default Home
