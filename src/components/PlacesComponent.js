import React from 'react'
import "./PlacesComponent.css"
import { useContext } from 'react';
import { RealEstateContext } from '../context/RealEstate';

const PlacesComponent = (props) => {
    let image = props.image;
    let name = props.name;
    let amount = props.amount;

    let realEstateContext = useContext(RealEstateContext);

    function handleClick() {
      realEstateContext.setPropertyName(props.name);
    }

  return (
    <div onClick={handleClick} className='flex flex-col items-left placeComponent hover:cursor-pointer'>
      <img className='imageInPlace mb-[25px]' src={image} ></img>
      <div className='name mb-[7px] text-lg'>{name}</div>
      <div className='para text-[#8a919d]'>{amount} properties</div>
    </div>
  )
}

export default PlacesComponent
