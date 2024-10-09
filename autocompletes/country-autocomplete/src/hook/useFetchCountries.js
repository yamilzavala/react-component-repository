import { useState, useCallback } from "react";
import { debounce } from "../utils/utils";

const baseUrl = "https://restcountries.com/v3.1/name/";

// Custom hook to fetch countries
const useFetchCountries = (setFilteredValues) => {
  const [loading, setLoading] = useState(false);

  //fetch
  const fetchCountries = useCallback(
    debounce(async (search) => {
      if (search.trim() === "") return;

      try {
        setLoading(true);
        const resp = await fetch(`${baseUrl}${search}`);
        const data = await resp.json();
        const filteredCountriesName = data.map(
          (country) => country?.name?.common
        );
        setFilteredValues(filteredCountriesName);
      } catch (error) {
        console.log("An error ocurred ", error.message);
      } finally {
        setLoading(false);
      }
    }, 1000),
    []
  );

  return { loading, fetchCountries };
};

export default useFetchCountries;
