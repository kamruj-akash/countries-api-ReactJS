import { useState } from "react";

const Country = ({ country, handleCountVisited }) => {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
    handleCountVisited(country.name.common);
  };
  return (
    <div className="border border-blue-400 p-5 rounded-xl shadow-2xl text-center">
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h1>{country.name.common}</h1>
      <h1>{country.name.official}</h1>
      <button
        onClick={handleVisited}
        className={`btn py-2 px-5 rounded-xl cursor-pointer mt-3  ${
          visited ? "bg-blue-400  " : "bg-black"
        }`}
      >
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
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
