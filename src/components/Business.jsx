import React from 'react';
import burgerImg from '../assets/food.png'

const Business = ({business}) => {
  return (
    <div className='rounded-xl shadow-lg shadow-sky-600 ring'>
        <div className='flex justify-center'>
            <img src={burgerImg} alt="double cheeseburger"/>
        </div>
        <div className='mx-2'>
            <h2 className='font-bold text-xl'>{business.name}</h2>
            <div className='flex justify-between'>
                <p className='text-base'>{business.address}</p>
                <p className='text-xl text-amber-400'>{business.category}</p>
            </div>
            <div className='flex justify-between'>
                <p>{business.city}</p>
                <p className='text-amber-400 ml-10'>{business.rating}</p>
            </div>
            <div className='flex justify-between text-sm mb-2'>
                <p>{business.zipcode}</p>
                <p>{business['review count']}</p>
            </div>
        </div>

    </div>
  )
}

export default Business