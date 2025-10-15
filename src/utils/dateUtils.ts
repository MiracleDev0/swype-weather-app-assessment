import { format, isSameDay } from 'date-fns';
import { HourlyWeather } from '../types/weather';

export const formatDate = (dateString: string): string => {
  return format(new Date(dateString), 'EEEE, MMM d, yyyy');
};

export const formatTime = (dateString: string): string => {
  return format(new Date(dateString), 'h a');
};

export const formatDayShort = (dateString: string): string => {
  return format(new Date(dateString), 'EEE');
};

export const formatDayFull = (dateString: string): string => {
  return format(new Date(dateString), 'EEEE');
};

export const isToday = (dateString: string): boolean => {
  return isSameDay(new Date(dateString), new Date());
};

interface HourlyDataItem {
  time: string;
  temperature: number;
  weatherCode: number;
  precipitation: number;
}

export const getHourlyDataForDay = (hourlyData: HourlyWeather, selectedDate: string): HourlyDataItem[] => {
  return hourlyData.time
    .map((time: string, index: number) => ({
      time,
      temperature: hourlyData.temperature_2m[index],
      weatherCode: hourlyData.weather_code[index],
      precipitation: hourlyData.precipitation[index],
    }))
    .filter((item: HourlyDataItem) => isSameDay(new Date(item.time), new Date(selectedDate)));
};