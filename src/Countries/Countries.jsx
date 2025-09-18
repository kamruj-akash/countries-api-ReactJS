import { use } from "react";

const Countries = ({ fetchCountries }) => {
  const data = use(fetchCountries);
  const CountriesData = data.countries;

  return (
    <>
      <h1>{CountriesData.length}</h1>
    </>
  );
};

export default Countries;
