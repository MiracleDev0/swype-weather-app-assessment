import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Location, WeatherData, UnitSystem } from '../types/weather';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.open-meteo.com/v1/' }),
  endpoints: (builder) => ({
    searchLocations: builder.query<Location[], string>({
      query: (searchTerm) => 
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(searchTerm)}&count=5&language=en&format=json`,
      transformResponse: (response: { results?: Location[] }) => response.results || [],
    }),
    getWeather: builder.query<WeatherData, { lat: number; lon: number; units: UnitSystem }>({
      query: ({ lat, lon, units }) => {
        const tempUnit = units === 'imperial' ? 'fahrenheit' : 'celsius';
        const windUnit = units === 'imperial' ? 'mph' : 'kmh';
        const precipUnit = units === 'imperial' ? 'inch' : 'mm';
        
        return `forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&hourly=temperature_2m,weather_code,precipitation&temperature_unit=${tempUnit}&wind_speed_unit=${windUnit}&precipitation_unit=${precipUnit}&timezone=auto&forecast_days=7`;
      },
    }),
  }),
});

export const { useSearchLocationsQuery, useGetWeatherQuery } = weatherApi;