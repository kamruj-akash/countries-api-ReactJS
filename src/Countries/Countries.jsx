import { use } from "react";
import Country from "../Country/Country";

const Countries = ({ fetchCountries, handleVisitedCountry }) => {
  const data = use(fetchCountries);
  const CountriesData = data.countries;

  return (
    <>
      {/* <h1>Total Visited Country: {visitedCountry}</h1> */}
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {CountriesData.map((country) => (
          <Country
            key={country.name.official}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
