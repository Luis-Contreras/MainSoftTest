import { useEffect, useState } from "react";
import { HISTORY_API } from "./constants";

const fetchHistory = (params) =>
  fetch(HISTORY_API, { params }).then((res) => res.json());

export const useHistory = (params = "") => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const res = await fetchHistory(params);
      setData(res);
      setIsLoading(false);
    };

    getData();
  }, [params]);

  return {
    data,
    isLoading,
  };
};
