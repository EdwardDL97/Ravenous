const yelpKey =
  "";
const yelpBaseUrl =
  "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3";

const YelpSearch = async (termSearch, locationSearch, sortBy) => {
  const businessRequestEndpoint = `/businesses/search`;

  const params = new URLSearchParams({
    term: termSearch,
    location: locationSearch,
    sort_by: sortBy,
  });

  const url = `${yelpBaseUrl}${businessRequestEndpoint}?${params.toString()}`;
  console.log(url);

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${yelpKey}`,
        accept: "application/json",
      },
    });

    if (!response.ok) {
        throw new Error(`HTTP Error!: ${response.status}`);
      }

    const data = await response.json();
    console.log(data)

    return data.businesses;
    
  } catch (error) {
    console.error("Error:", error);
  }
};

export default YelpSearch;
