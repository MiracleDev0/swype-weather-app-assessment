'use client';

import { HourlyWeather, DailyWeather } from '../types/weather';
import { getWeatherIcon } from '../utils/weatherIcons';
import { formatTime, formatDayFull, getHourlyDataForDay } from '../utils/dateUtils';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

interface HourlyForecastProps {
  hourly: HourlyWeather;
  daily: DailyWeather;
  selectedDate: string;
  onDateChange: (date: string) => void;
}

interface HourlyDataItem {
  time: string;
  temperature: number;
  weatherCode: number;
  precipitation: number;
}

export const HourlyForecast = ({ hourly, daily, selectedDate, onDateChange }: HourlyForecastProps) => {
  const hourlyData = getHourlyDataForDay(hourly, selectedDate);
  const selectedDayName = formatDayFull(selectedDate);

  return (
    <div className="">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white text-lg font-semibold">Hourly forecast</h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              size="sm"
              className="bg-slate-800/50 border-slate-700 text-white hover:bg-slate-700/50"
            >
              {selectedDayName}
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-slate-800 border-slate-700">
            {daily.time.map((date) => (
              <DropdownMenuItem
                key={date}
                onClick={() => onDateChange(date)}
                className={`text-white hover:bg-slate-700 ${selectedDate === date ? 'bg-slate-700' : ''}`}
              >
                {formatDayFull(date)}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <div className="space-y-2 max-h-[32rem] overflow-y-auto no-scrollbar">
        {hourlyData.map((hour: HourlyDataItem, index: number) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl border border-slate-700"
          >
            <div className="flex items-center gap-3">
              {getWeatherIcon(hour.weatherCode, 20)}
              <span className="text-white font-medium">
                {formatTime(hour.time)}
              </span>
            </div>
            <div className="text-white font-semibold">
              {Math.round(hour.temperature)}°
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};