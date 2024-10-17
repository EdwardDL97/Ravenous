import React, { useState } from "react";

const SearchBar = () => {
 
  const [sortSelected, setSortSelected] = useState('best-match');
  const handleSort = (buttonValue) => {
    setSortSelected(buttonValue);
  }

  const [business, setBusiness] = useState('');
  const handleBusiness = ({target}) => setBusiness(target.value);

  const [location, setLocation] = useState('');
  const handleLocation = ({target}) => setLocation(target.value);

  const handleSearch = () => {
    console.log(`Searching Yelp with ${business}, ${location}, ${sortSelected}...`);
  }

 

  return (
    <section id="searchBox">
      <div className="flex flex-col items-center justify-center py-8 space-y-8 bg-bgfood bg-cover bg-no-repeat mb-8">
        
        <div className="space-x-10 text-white text-xl font-semibold">
          <button 
            onClick={() => handleSort('best-match')}
            className={`px-8 border-b-2 ${sortSelected === 'best-match' ? 'text-amber-400 border-b-amber-400' : 'border-transparent'}`}>Best Match</button>
          <button 
            onClick={() => handleSort('highest-rated')}
            className={`px-8 border-b-2 ${sortSelected === 'highest-rated' ? 'text-amber-400 border-b-amber-400' : 'border-transparent'}`}>Highest Rated</button>
          <button 
            onClick={() => handleSort('most-reviewed')}
            className={`px-8 border-b-2 ${sortSelected === 'most-reviewed' ? 'text-amber-400 border-b-amber-400' : 'border-transparent'}`}>Most Reviewed</button>
        </div>

        <div className="space-x-4">
          <input type="search"
            className="px-4 py-1 rounded-full" 
            placeholder="Search Business"
            onChange={handleBusiness}
            value={business}/>
          <input type="search" 
            className="px-4 py-1 rounded-full"
            placeholder="Search Location"
            onChange={handleLocation}
            value={location}/>
        </div>

        <div>
          <button className="px-4 py-2 rounded-full font-semibold text-white text-2xl bg-limeGreen hover:bg-lime-700"
            onClick={handleSearch}>Lets Go!</button>
        </div>

      </div>
      
    </section>
  );
};

export default SearchBar;