import { useEffect, useState } from "react";
import { COUNTRIES_API, HISTORY_API, REQUEST_TYPE } from "./constants";

const fetchCountries = () => fetch(COUNTRIES_API).then((res) => res.json());
const saveCountry = (body) =>
  fetch(HISTORY_API, {
    method: REQUEST_TYPE.POST,
    headers: {
      "Content-Type": "application/json",
    },
    body,
  }).then((res) => res.json());

export const useFetchCountries = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const res = await fetchCountries();
      setData(res);
      setIsLoading(false);
    };

    getData();
  }, []);

  return {
    data,
    isLoading,
  };
};

export const useSaveCountry = () => {
  return [saveCountry];
};
