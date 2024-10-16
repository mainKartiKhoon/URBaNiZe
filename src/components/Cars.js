import React from 'react'
import { useContext, useState } from 'react'
import { CarsContext } from '../context/Cars'
import "./Cars.css"
import CardInCars from './CardInCars'


const Cars = () => {

  const carsContext  = useContext(CarsContext);
  const [likedCars, setLikedCars] = useState([]);
  // console.log('now', carsContext)
  function getCarInfo() {
    if (!carsContext.CarsDataset) {
      return [];
    }
    return carsContext.CarsDataset;
  }
  


  return (
    <div className='bg-[#111827] flex flex-col items-center text-white py-[50px]'>
      <h3 className='text-4xl mainTitleInCars text-[#e2e8f0] mb-[20px] font-semibold  text-center'>Cars In Tokyo</h3>
      <p className='text-base mainParaInCars text-[#8d9cb1] mb-[50px] text-center'>233 Cars · Aug 12 - 18</p>
      <div className='propertiesInCars  flex flex-wrap gap-[30px] justify-center '>
        {
          getCarInfo().map((info) => (
            <CardInCars info={info} key={info.id} likedCars={likedCars} setLikedCars={setLikedCars}/>
          ))
        }
      </div>
    </div>
  )
}

export default Cars
