'use client';

import { CurrentWeather as CurrentWeatherType, Location } from '../types/weather';
import { getWeatherIcon } from '../utils/weatherIcons';
import { formatDate } from '../utils/dateUtils';

interface CurrentWeatherProps {
  weather: CurrentWeatherType;
  location: Location;
}

export const CurrentWeather = ({ weather, location }: CurrentWeatherProps) => {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-orange-400 rounded-full"></div>
      <div className="absolute bottom-6 right-8 w-1 h-1 bg-white/60 rounded-full"></div>
      <div className="absolute bottom-12 right-12 w-1 h-1 bg-white/40 rounded-full"></div>
      
      <div className="relative z-10">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">{location.name}, {location.country}</h2>
          <p className="text-blue-100 text-sm">{formatDate(weather.time)}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-6xl font-light">
              {Math.round(weather.temperature_2m)}°
            </div>
          </div>
          <div className="flex-shrink-0">
            {getWeatherIcon(weather.weather_code, 64)}
          </div>
        </div>
      </div>
    </div>
  );
};