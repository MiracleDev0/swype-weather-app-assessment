'use client';

import { DailyWeather } from '../types/weather';
import { getWeatherIcon } from '../utils/weatherIcons';
import { formatDayShort, isToday } from '../utils/dateUtils';

interface DailyForecastProps {
  daily: DailyWeather;
  onDaySelect: (date: string) => void;
  selectedDate?: string;
}

export const DailyForecast = ({ daily, onDaySelect, selectedDate }: DailyForecastProps) => {
  return (
    <div className="mt-8">
      <h3 className="text-white text-lg font-semibold mb-4">Daily forecast</h3>
      <div className="grid grid-cols-3 md:grid-cols-7 gap-2">
        {daily.time.map((date, index) => {
          const isSelected = selectedDate === date;
          const dayLabel = isToday(date) ? 'Today' : formatDayShort(date);
          
          return (
            <button
              key={date}
              onClick={() => onDaySelect(date)}
              className={`p-1 pt-2 rounded-xl text-center transition-colors ${
                isSelected 
                  ? 'bg-blue-400 text-white' 
                  : 'bg-slate-800/50 text-white hover:bg-slate-700/50'
              } border border-slate-700`}
            >
              <div className="text-xs mb-2 font-medium">{dayLabel}</div>
              <div className="flex justify-center mb-2">
                {getWeatherIcon(daily.weather_code[index], 24)}
              </div>
              <div className="text-sm font-semibold">
                {Math.round(daily.temperature_2m_max[index])}°
              </div>
              <div className="text-xs text-gray-400">
                {Math.round(daily.temperature_2m_min[index])}°
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};