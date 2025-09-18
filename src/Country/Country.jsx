import { useState } from "react";

const Country = ({ country, handleVisitedCountry }) => {
  const [visited, setVisited] = useState(false);
  const handleCountryVisit = () => {
    // visited ? setVisited(false) : setVisited(true);
    setVisited(!visited);
    handleVisitedCountry(country);
  };

  return (
    <>
      <div className="border rounded-xl overflow-hidden border-blue-400 text-center">
        <img src={country.flags.flags.svg} alt={country.flags.flags.alt} />
        <div className="p-2">
          <div className="text-center my-3">
            <h1 className="text-2xl font-semibold text-slate-100">
              {country.name.common}
            </h1>
            <p className="text-sm">{country.name.official}</p>
          </div>
          <div>
            <p>Capital: {country.capital.capital}</p>
            <p>Population: {country.population.population}</p>
          </div>
          <button
            type="button"
            className={`btn py-2 px-5  rounded-xl cursor-pointer mt-3 ${
              visited ? "bg-blue-500" : "bg-black"
            }`}
            onClick={handleCountryVisit}
          >
            {visited ? "Visited" : " Not Visited"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Country;
/** {
    "name": {
        "common": "Netherlands",
        "official": "Kingdom of the Netherlands"
    },
    "ccn3": {
        "ccn3": "528"
    },
    "currencies": {
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        }
    },
    "capital": {
        "capital": [
            "Amsterdam"
        ]
    },
    "region": {
        "region": "Europe"
    },
    "languages": {
        "languages": {
            "nld": "Dutch"
        }
    },
    "area": {
        "area": 41850
    },
    "cca3": {
        "cca3": "NLD"
    },
    "population": {
        "population": 16655799
    },
    "continents": {
        "continents": [
            "Europe"
        ]
    },
    "flags": {
        "flags": {
            "png": "https://flagcdn.com/w320/nl.png",
            "svg": "https://flagcdn.com/nl.svg",
            "alt": "The flag of the Netherlands is composed of three equal horizontal bands of red, white and blue."
        }
    }
} */
