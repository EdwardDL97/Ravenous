import React from 'react';
import burgerImg from '../assets/food.png'

const Business = ({business}) => {
  return (
    <div className='rounded-xl shadow-lg shadow-limeGreen '>
        <div className='flex justify-center h-1/2 bg-black rounded-t-lg'>
            <img src={business.image_url} alt="double cheeseburger"/>
        </div>
        <div className='mx-2 text-white'>
            <h2 className='font-bold text-xl'>{business.name}</h2>
            <div className='flex justify-between'>
                <p className='text-base'>{business.location.address1}</p>
                <p className='text-xl text-amber-400'>{business.categories[0].title.replace(/_/g, ' ')}</p>
            </div>
            <div className='flex justify-between text-white'>
                <p>{business.location.city}</p>
                <p className='text-amber-400 ml-10'>{business.rating} stars</p>
            </div>
            <div className='flex justify-between text-sm mb-2 text-white'>
                <p>{business.location.zip_code}</p>
                <p>{business.review_count} reviews</p>
            </div>
        </div>

    </div>
  )
}

export default Business