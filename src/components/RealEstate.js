import React, { useContext, useState } from 'react'
import { RealEstateContext } from '../context/RealEstate'
import CardInRealEstate from './CardInRealEstate';
import "./RealEstate.css"

const RealEstate = () => {
  
  // const RealEstateContext = useContext(RealEstateContext);
  const realEstate = useContext(RealEstateContext);
  const [likedRealEstate, setLikedRealEstate] = useState([]);
  console.log(realEstate);

  function getRealEstateCards() {
    if (!realEstate.realEstateDataset) {
      return [];
    }
    return realEstate.realEstateDataset;
  }
  
  
  return (
    <div className='bg-[#111827] text-white py-[50px]'>

      <h3 className='text-4xl mainTitle text-[#e2e8f0] mb-[20px] font-semibold  text-center'>Property In {realEstate.propertyName}</h3>
      <p className='text-base mainPara text-[#8d9cb1] mb-[50px] text-center'>233 Property · Aug 12 - 18</p>
      

      <div className='properties flex flex-wrap gap-[30px] justify-center '>
        {
          getRealEstateCards().map((singleCard) => (
            <CardInRealEstate key={singleCard.id} info={singleCard} likedRealEstate ={likedRealEstate} setLikedRealEstate={setLikedRealEstate}/>
            
          ))
        }
        {/* <div>hello</div> */}
      </div>
      
    </div>
  )
}

export default RealEstate
