import { useEffect, useState } from "react";
import { WEATHER_API } from "./constants";

const fetchWeather = ({ long, lat }) =>
  fetch(
    WEATHER_API +
      `?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`
  ).then((res) => res.json());

export const useFetchWeather = (params) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const res = await fetchWeather(params);
      if (res.cod === "400") {
        setData([]);
        setError(res.message);
      } else {
        setData(res);
        setError("");
      }
      setIsLoading(false);
    };

    getData();
  }, [params]);

  return {
    data,
    isLoading,
    error,
  };
};
