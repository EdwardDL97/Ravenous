import React from 'react'
import BusinessList from './components/BusinessList'
import SearchBar from './components/SearchBar'

const data = [
  {
      "image": "",
      "name": "Chili\"s",
      "address": "123 Fake st.",
      "city": "Euless",
      "state": "TX",
      "zipcode": "76039",
      "category": "American",
      "rating": "4.0 stars",
      "review count": "90 reviews"    
  },
  {
      "image": "",
      "name": "Olive Garden",
      "address": "221 Deli rd.",
      "city": "Dallas",
      "state": "TX",
      "zipcode": "76401",
      "category": "Italian",
      "rating": "3.7 stars",
      "review count": "891 reviews"    
  },
  {
      "image": "",
      "name": "Panda Express",
      "address": "314 Wok ln.",
      "city": "Ft. Worth",
      "state": "TX",
      "zipcode": "76044",
      "category": "Asian",
      "rating": "3.2 stars",
      "review count": "900 reviews"    
  },
  {
      "image": "",
      "name": "The Reserve",
      "address": "1310 Chisolm Trail #100",
      "city": "Euless",
      "state": "TX",
      "zipcode": "76039",
      "category": "Mexican",
      "rating": "4.2 stars",
      "review count": "630 reviews"    
  }
];


const App = () => {
  return (
    <>
    <section className='bg-limeGreen py-4 border-b-4 border-b-black'>
      <h1 className='text-4xl text-white font-bold text-center'>Ravenous</h1>
    </section>
      <SearchBar />
      <BusinessList businesses={data}/>
    </>
  )
}

export default App