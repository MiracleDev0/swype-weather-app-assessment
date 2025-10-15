'use client';

import { CurrentWeather } from '../types/weather';

interface WeatherMetricsProps {
  weather: CurrentWeather;
  units: 'metric' | 'imperial';
}

export const WeatherMetrics = ({ weather, units }: WeatherMetricsProps) => {
  const metrics = [
    {
      label: 'Feels Like',
      value: `${Math.round(weather.apparent_temperature)}°`,
    },
    {
      label: 'Humidity',
      value: `${weather.relative_humidity_2m}%`,
    },
    {
      label: 'Wind',
      value: `${Math.round(weather.wind_speed_10m)} ${units === 'metric' ? 'km/h' : 'mph'}`,
    },
    {
      label: 'Precipitation',
      value: `${weather.precipitation} ${units === 'metric' ? 'mm' : 'in'}`,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="bg-slate-800/50 rounded-xl p-4 border border-slate-700"
        >
          <div className="text-gray-400 text-sm mb-1">{metric.label}</div>
          <div className="text-white text-xl font-semibold">{metric.value}</div>
        </div>
      ))}
    </div>
  );
};