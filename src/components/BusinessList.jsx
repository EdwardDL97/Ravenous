import React from 'react'
import Business from './Business'

const BusinessList = ({businesses}) => {
  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        {businesses.map((business) => (
            <Business key={business.id} business={business}/>
        ))}
    </div>
  )
}

export default BusinessList