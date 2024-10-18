import React, { useState } from 'react';

import SearchBar from './components/SearchBar';
import BusinessList from './components/BusinessList';
import YelpSearch from './utils/YelpCode';

const App = () => {

  const [businesses, setBusinesses] = useState([]);
  const searchYelp = async (business, location, sortSelected) => {
    //console.log(`Searching Yelp with ${business}, ${location}, ${sortSelected}...`);
    const results = await YelpSearch(business, location, sortSelected);
    setBusinesses(results);
  };

  return (
    <>
    <section className='bg-limeGreen py-4 border-b-4 border-b-black'>
      <h1 className='text-4xl text-white font-bold text-center'>Ravenous</h1>
    </section>
      <SearchBar searchYelp={searchYelp}/>
      <BusinessList businesses={businesses} />
    </>
  )
}

export default App