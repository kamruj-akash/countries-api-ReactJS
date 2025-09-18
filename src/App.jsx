import { Suspense, useState } from "react";
import "./App.css";
import Countries from "./Countries/Countries";
import LoadingSpinner from "./LoadingSpinner";

// countries
const url = "https://openapi.programming-hero.com/api/all";
const countriesPromise = async () => {
  const res = await fetch(url);
  return res.json();
};
const fetchCountries = countriesPromise();
function App() {
  const [visitedCountry, setVisitedCountry] = useState([]);
  const handleVisitedCountry = (country) => {
    const countryVisit = country.name.common;
    const newVisitedCountry = [...visitedCountry, countryVisit];
    setVisitedCountry(newVisitedCountry);
  };

  return (
    <>
      <h1 className="text-4xl text-center text-blue-400 font-semibold  pb-2 mb-5">
        All Country List
      </h1>
      <h1 className="text-2xl text-center text-blue-400 font-semibold border-b pb-2 mb-5">
        Total Visited Country: {visitedCountry}
      </h1>
      {/* <input type="search" className="w-28" /> */}
      <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
        <Countries
          handleVisitedCountry={handleVisitedCountry}
          fetchCountries={fetchCountries}
        ></Countries>
      </Suspense>
    </>
  );
}

export default App;
