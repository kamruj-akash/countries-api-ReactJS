import { Suspense } from "react";
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
  return (
    <>
      <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
        <Countries fetchCountries={fetchCountries}></Countries>
      </Suspense>
    </>
  );
}

export default App;
