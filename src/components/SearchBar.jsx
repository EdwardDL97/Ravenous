/* eslint-disable react/prop-types */
import React, { useState } from "react";

const SearchBar = ({ searchYelp }) => {
  const [sortSelected, setSortSelected] = useState("best_match");
  const handleSort = (buttonValue) => {
    setSortSelected(buttonValue);
  };

  const [business, setBusiness] = useState("");
  const handleBusiness = ({ target }) => setBusiness(target.value);

  const [location, setLocation] = useState("");
  const handleLocation = ({ target }) => setLocation(target.value);

  const handleSearch = (event) => {
    event.preventDefault();
    searchYelp(business, location, sortSelected);
  };

  return (
    <>
      <section id="searchBox">
        <form onSubmit={handleSearch}>
          <div className="flex flex-col items-center justify-center py-8 space-y-8 bg-bgfood bg-cover bg-no-repeat mb-8">
            <fieldset className="space-x-10 text-white text-xl font-semibold">
              <label>
                <input
                  type="radio"
                  name="sort"
                  value="best_match"
                  onChange={() => handleSort("best_match")}
                  className="hidden"
                  checked={sortSelected === "best_match"}
                />
                <span
                  className={`cursor-pointer px-8 border-b-2 ${
                    sortSelected === "best_match"
                      ? "text-amber-400 border-b-amber-400"
                      : "border-transparent"
                  }`}
                >
                  Best Match
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="sort"
                  value="rating"
                  onChange={() => handleSort("rating")}
                  className="hidden"
                  checked={sortSelected === "rating"}
                />
                <span
                  className={`cursor-pointer px-8 border-b-2 ${
                    sortSelected === "rating"
                      ? "text-amber-400 border-b-amber-400"
                      : "border-transparent"
                  }`}
                >
                  Highest Rated
                </span>
              </label>

              <label>
                <input
                  type="radio"
                  name="sort"
                  value="review_count"
                  onChange={() => handleSort("review_count")}
                  className="hidden"
                  checked={sortSelected === "review_count"}
                />
                <span
                  className={`cursor-pointer px-8 border-b-2 ${
                    sortSelected === "review_count"
                      ? "text-amber-400 border-b-amber-400"
                      : "border-transparent"
                  }`}
                >
                  Most Reviewed
                </span>
              </label>
            </fieldset>

            <div className="space-x-4">
              <input
                type="search"
                className="px-4 py-1 rounded-full"
                placeholder="Search Business"
                onChange={handleBusiness}
                value={business}
              />
              <input
                type="search"
                className="px-4 py-1 rounded-full"
                placeholder="Search Location"
                onChange={handleLocation}
                value={location}
              />
            </div>

            <div>
              <button
                type="submit"
                className="px-4 py-2 rounded-full font-semibold text-white text-2xl bg-limeGreen hover:bg-lime-700"
              >
                Lets Go!
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default SearchBar;
