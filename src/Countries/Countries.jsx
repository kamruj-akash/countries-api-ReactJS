import { use } from "react";
import Country from "../Country/Country";

const Countries = ({ fetchCountries, handleCountVisited }) => {
  const data = use(fetchCountries);
  const countries = data.countries;

  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {countries.map((country) => (
        <Country
          handleCountVisited={handleCountVisited}
          country={country}
        ></Country>
      ))}
    </div>
  );
};

export default Countries;
