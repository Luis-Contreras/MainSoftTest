const baseUrl = process.env.REACT_APP_API_PATH || "http://localhost:8000/api";

export const COUNTRIES_API = `${baseUrl}/countries`;
export const HISTORY_API = `${baseUrl}/history`;
export const WEATHER_API = `http://api.openweathermap.org/data/2.5/forecast`;
export const REQUEST_TYPE = {
  POST: "POST",
};
