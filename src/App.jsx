import { Suspense, useState } from "react";
import "./App.css";
import Countries from "./Countries/Countries";
import LoadingSpinner from "./LoadingSpinner";

// fetch country
const url = "https://openapi.programming-hero.com/api/all";
const FetchCountries = async () => {
  const res = await fetch(url);
  return res.json();
};
const fetchCountries = FetchCountries();

function App() {
  const [countVisited, setCountVisited] = useState([]);
  const handleCountVisited = (country) => {
    const newVisited = [...countVisited, country];
    const uniqueArray = [...new Set(newVisited)];
    setCountVisited(uniqueArray);
  };
  console.log(countVisited);

  return (
    <>
      <h1 className="text-4xl text-center text-blue-400 font-semibold  pb-2 mb-5">
        All Country List
      </h1>
      <h1 className="text-2xl text-center text-blue-400 font-semibold border-b pb-2 mb-5">
        Total Country: {countVisited.length}
      </h1>
      <h1 className="text-2xl text-center text-blue-400 font-semibold border-b pb-2 mb-5">
        Total Visited Country:{" "}
        <span className="text-emerald-600 font-bold">
          {countVisited.map((country) => country + ", ")}
        </span>
      </h1>
      <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
        <Countries
          handleCountVisited={handleCountVisited}
          fetchCountries={fetchCountries}
        ></Countries>
      </Suspense>
    </>
  );
}

export default App;
