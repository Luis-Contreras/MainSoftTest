import React from "react";
import Select from "../../components/select";
import { useFetchCountries, useSaveCountry } from "../../api/countries";

export const Country = ({ setCurrentItem }) => {
  const { data, isLoading } = useFetchCountries();
  const [saveToHistory] = useSaveCountry();

  const handleChange = async (value) => {
    const item = JSON.parse(value);
    const body = {
      country_name: item.name.common,
      long: item.latlng[1],
      lat: item.latlng[0],
    };
    const res = await saveToHistory(JSON.stringify(body));
    //optimistical update
    if (res?.history)
      setCurrentItem({ created_at: new Date().toISOString(), ...res.history });
  };

  return <Select options={data} loading={isLoading} onChange={handleChange} />;
};
