import React from "react";

const SearchBar = () => {
  return (
    <section id="searchBox">
      <div className="flex flex-col items-center justify-center py-8 space-y-8 bg-bgfood bg-cover bg-no-repeat mb-8">
        
        <div className="space-x-10 text-white text-xl font-semibold border-b-white border-b-4">
          <button className="hover:text-amber-400">Best Match</button>
          <button className="hover:text-amber-400">Highest Rated</button>
          <button className="hover:text-amber-400">Most Reviewed</button>
        </div>

        <div className="space-x-4">
          <input type="search"
            className="px-4 py-1 rounded-full" 
            placeholder="Search Business"/>
          <input type="search" 
            className="px-4 py-1 rounded-full"
            placeholder="Search Location"/>
        </div>

        <div>
          <button className="px-4 py-2 rounded-full font-semibold text-white text-2xl bg-limeGreen hover:bg-lime-700">Lets Go!</button>
        </div>

      </div>
      
    </section>
  );
};

export default SearchBar;