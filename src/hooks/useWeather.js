import { useCallback } from 'react';
import axios from 'axios';

export const useWeather = () => {
  const BASE_URL = 'https://api.weatherapi.com/v1';

  const fetchWeather = useCallback(async (city) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/current.json?key=${process.env.REACT_APP_WEATHERAPI_TOKEN}&q=${city}&aqi=no`
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }, []);

  return { fetchWeather };
};
