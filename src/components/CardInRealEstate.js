import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import "./CardInRealEstate.css"
import { RiLinksFill } from "react-icons/ri";
import { MdFamilyRestroom } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { LuBath } from "react-icons/lu";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";
import { RealEstateContext } from '../context/RealEstate';

const CardInRealEstate = (props) => {
  let info = props.info;
  console.log(info);
  const navigate = useNavigate();
  // console.log(info.title);
  let [liked, setLiked] = useState(false);
  let likedRealEstate = props.likedRealEstate;
  let setLikedRealEstate = props.setLikedRealEstate;
  const realEstateCard = useContext(RealEstateContext);

  function handleLike() {
    if (likedRealEstate.includes(info.id)) {
      setLikedRealEstate((prev) => prev.filter((cid) => (cid != info.id)))
    }
    else {
      if (likedRealEstate.length == 0) {
        setLikedRealEstate([info.id])
      }
      else {
        setLikedRealEstate((prev) => [...prev, info.id])
      }
    }
  }

  function handleClick() {
    realEstateCard.setCurrObjectInRealEstate(info);
    navigate('/realestate/template');
  }

  return (
    <div className=' w-[630px]  mainBox h-[260px] relative border  border-[#232f44] p-[10px] rounded-[20px]  flex items-center gap-[20px]'>
      {/* //? Like button */}

      <div onClick={handleLike} className='bg-[#33415562] hover:bg-[#3f4d61] absolute top-[15px] right-[15px] hover:cursor-pointer p-[7px] rounded-full'>
        {
          likedRealEstate.includes(info.id) ? (<FcLike fontSize={22} />) : (<CiHeart fontSize={22} />)

        }
      </div>

      {/* //? Image */}

      <div className='h-[100%] w-[40%] imagePart '>
        <img className='imageOfRealEstate rounded-[20px]' src={info.image}></img>
      </div>
      <div className=' w-[60%] restPart'>
        {/* //? Buttons */}
        <div className='flex items-center gap-[15px] mb-[15px]'>
          <div className='bg-[#dbeafe] text-[#1f41af] w-fit rounded-full py-[4px] px-[15px] font-semibold flex items-center'>
            <RiLinksFill color='#1f41af' fontSize={15} />
            <div className='text-xs'>4 Network</div>
          </div>
          <div className='bg-[#fef9c3] text-[#875011] w-fit rounded-full py-[4px] px-[15px] font-semibold flex items-center'>
            <MdFamilyRestroom fontSize={15} />
            <div className='ml-[2px] text-xs'>Family</div>
          </div>
        </div>

        {/* //? Title */}
        <div onClick={handleClick} className='text-lg mb-[15px] hover:cursor-pointer'>{info.title}</div>


        {/* //? So many Emojis */}
        <div className='flex items-center gap-[30px] text-[#adb0b9] text-xs'>
          <div className='flex items-center gap-[5px]'>
            <FaBed fontSize={17} color='#e1e7ef' />
            <div>{info.beds} beds</div>
          </div>
          <div className='flex items-center gap-[5px]'>
            <LuBath fontSize={17} color='#e1e7ef' />
            <div>{info.baths} baths</div>
          </div>
          <div className='flex items-center gap-[5px]'>
            <FaExpandArrowsAlt fontSize={17} color='#e1e7ef' />
            <div>{info.size} Sq. Fit</div>

          </div>
        </div>

        {/* //? LINE */}
        <div className='h-[1px] w-[60px] bg-[#232f4a] my-[20px]'></div>

        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-[7px]'>
            <FaStar color='#f97316' fontSize={16} />
            <div className='text-sm font-semibold'>{info.rating} <span className='font-normal text-xs text-[#8896aa]'>({info.reviews})</span></div>
          </div>
          <button className='text-[#13ab9b] mr-[15px] py-[5px] px-[15px] text-lg border rounded-[7px] transition-all duration-150 hover:cursor-pointer hover:bg-[#13ab9b] hover:text-[#111827] border-[#13ab9b] font-semibold'>${info.price}<span className='font-normal text-sm'>/night</span></button>
        </div>
      </div>
    </div>
  )
}

export default CardInRealEstate;
