import React from 'react'
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import "./CardInCars.css"
import { CarsContext } from '../context/Cars';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const CardInCars = (props) => {
  let info = props.info;
  console.log(info);
  let likedCars = props.likedCars;
  let setLikedCars = props.setLikedCars;
  let carCard = useContext(CarsContext);
  const navigate = useNavigate();


  function handleLike() {
    if (likedCars.includes(info.id)) {
      setLikedCars((prev) => prev.filter((cid) => (cid != info.id)))
    }
    else {
      if (likedCars.length == 0) {
        setLikedCars([info.id])
      }
      else {
        setLikedCars((prev) => [...prev, info.id])
      }
    }
  }

  function handleClick() {
    carCard.setCurrObjectInCars(info);
    navigate('/cars/template');
  }
  
  return (
    // <div className=' w-[250px]  mainBoxInCars h-[300px] relative border border-[#232f44] p-[5px] rounded-[20px]  flex flex-col items-center gap-[20px]'>
    //   {/* //? Like button */}

    //   <div  className='hover:bg-[#334155] absolute top-[5px] right-[5px] hover:cursor-pointer p-[7px] rounded-full'>
    //     {/* {
    //       likedRealEstate.includes(info.id) ? (<FcLike fontSize={22} />) : (<FcLikePlaceholder fontSize={22} />)

    //     } */}
    //     <FcLike fontSize={22} />
    //   </div>

    //   {/* //? Image */}

    //   <div className='h-[40%] w-[100%] imagePartInCars '>
    //     {/* <img className='imageOfRealEstate rounded-[20px]' src={info.image}></img> */}
    //     <img className='imageOfCars rounded-[20px]' src="https://chisfis-template.vercel.app/static/media/2.f3b23c9ef815235f2a35.png"></img>
    //   </div>
    //   <div className=' w-[60%] restPartInCars'>
    //     {/* //? Buttons */}
    //     {/* <div className='flex items-center gap-[15px] mb-[15px]'>
    //       <div className='bg-[#dbeafe] text-[#1f41af] w-fit rounded-full py-[4px] px-[15px] font-semibold flex items-center'>
    //         <FcLike color='#1f41af' fontSize={15} />
    //         <div className='text-xs'>4 Network</div>
    //       </div>
    //       <div className='bg-[#fef9c3] text-[#875011] w-fit rounded-full py-[4px] px-[15px] font-semibold flex items-center'>
    //         <FcLike fontSize={15} />
    //         <div className='ml-[2px] text-xs'>Family</div>
    //       </div>
    //     </div> */}

    //     {/* //? Title */}
    //     <div className='text-lg mb-[15px] hover:cursor-pointer'>Title</div>


    //     {/* //? So many Emojis */}
    //     {/* <div className='flex items-center gap-[30px] text-[#adb0b9] text-xs'>
    //       <div className='flex items-center gap-[5px]'>
    //         <FcLike fontSize={17} color='#e1e7ef' />
    //         <div>10 beds</div>
    //       </div>
    //       <div className='flex items-center gap-[5px]'>
    //         <FcLike fontSize={17} color='#e1e7ef' />
    //         <div>12 baths</div>
    //       </div>
    //       <div className='flex items-center gap-[5px]'>
    //         <FcLike fontSize={17} color='#e1e7ef' />
    //         <div>1200 Sq. Fit</div>

    //       </div>
    //     </div> */}
    //     <div>4 seats - Auto gearbox</div>

    //     {/* //? LINE */}
    //     <div className='h-[1px] w-[60px] bg-[#232f4a] my-[20px]'></div>

    //     <div className='flex items-center justify-between'>
    //       <div className='flex items-center gap-[7px]'>
    //         <FcLike color='#f97316' fontSize={16} />
    //         <div className='text-sm font-semibold'>3.4<span className='font-normal text-xs text-[#8896aa]'>(322)</span></div>
    //       </div>
    //       <button className='text-[#13ab9b] mr-[15px] py-[5px] px-[15px] text-lg border rounded-[7px] transition-all duration-150 hover:cursor-pointer hover:bg-[#13ab9b] hover:text-[#111827] border-[#13ab9b] font-semibold'>$400<span className='font-normal text-sm'>/night</span></button>
    //     </div>
    //   </div>
    // </div>
    <div className='mainBoxInCars relative border border-[#232f44] rounded-[20px] w-[300px] h-[330px] flex flex-col justify-center pb-[20px]'>
      <div onClick={handleLike} className='bg-[#33415562] hover:bg-[#3f4d61] absolute top-[15px] right-[15px] hover:cursor-pointer p-[7px] rounded-full'>
        {
          likedCars.includes(info.id) ? (<FcLike fontSize={22} />) : (<CiHeart fontSize={22} />)
          
        }
      </div>

      {/* //? IMAGE PART */}
      <div className='imagePartInCars '><img className='imageOfCars' src={info.image}></img></div>

      {/* //?REST PART  */}
      <div className='restPartInCars pt-[10px] px-[30px]'>
        {/* //? Title */}
        <div onClick={handleClick} className='text-lg font-semibold mb-[5px] hover:cursor-pointer'>{info.name}</div>

        {/* //? Info */}
        <div className='text-sm text-[#9aa1ad]'>{info.seats} seats - {info.gearbox} gearbox</div>

        {/* //? Line */}
        <div className='h-[1px] w-[60px] bg-[#1d263d] mb-[20px] mt-[15px]'></div>

        {/* //? price and rating */}
        <div className='flex items-center justify-between '>
          <div className='text-base p-[5px] px-[10px] border border-[#1ccfbd] font-semibold transition-all duration-150 hover:bg-[#1ccfbd] hover:text-[#111827] rounded-[7px] hover:cursor-pointer text-[#1ccfbd]'>${info.price}<span className='text-sm  font-normal'> /day</span></div>
          <div className='flex items-center gap-[5px]'>
            <FaStar color='#f97316' fontSize={16} />
            <div className='font-semibold text-sm'>{info.rating}</div>
            <span className='text-[#959ca8] font-normal text-sm'>({info.reviews})</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardInCars
