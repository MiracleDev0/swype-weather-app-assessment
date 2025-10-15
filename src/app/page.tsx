'use client';

import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { useGetWeatherQuery } from '../store/weatherApi';
import { Location, UnitSystem } from '../types/weather';
import { SearchBar } from '../components/SearchBar';
import { CurrentWeather } from '../components/CurrentWeather';
import { WeatherMetrics } from '../components/WeatherMetrics';
import { DailyForecast } from '../components/DailyForecast';
import { HourlyForecast } from '../components/HourlyForecast';
import { UnitsToggle } from '../components/UnitsToggle';
import { Sun } from 'lucide-react';

const WeatherContent = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [units, setUnits] = useState<UnitSystem>('metric');
  const [selectedDate, setSelectedDate] = useState<string>('');

  const { data: weatherData, isLoading, error } = useGetWeatherQuery(
    selectedLocation ? { 
      lat: selectedLocation.latitude, 
      lon: selectedLocation.longitude, 
      units 
    } : { lat: 0, lon: 0, units },
    { skip: !selectedLocation }
  );


  if (weatherData && !selectedDate) {
    setSelectedDate(weatherData.daily.time[0]);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Sun className="w-8 h-8 text-orange-400" />
            <h1 className="text-white text-2xl font-bold">Weather Now</h1>
          </div>
          <UnitsToggle units={units} onUnitsChange={setUnits} />
        </div>

        {/* Main Heading*/}
        <div className="text-center mb-8">
          <h2 className="text-white text-4xl md:text-5xl font-light mb-6">
            How's the sky looking today?
          </h2>
          <SearchBar onLocationSelect={setSelectedLocation} />
        </div>

        {/* Weather Content */}
        {isLoading && selectedLocation && (
          <div className="text-center text-white text-lg">Loading weather data...</div>
        )}

        {error && (
          <div className="text-center text-red-400 text-lg">
            Failed to load weather data. Please try again.
          </div>
        )}

        {weatherData && selectedLocation && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Side - Main Weather Info */}
            <div className="lg:col-span-2 space-y-6">
              <CurrentWeather 
                weather={weatherData.current} 
                location={selectedLocation} 
              />
              <WeatherMetrics 
                weather={weatherData.current} 
                units={units} 
              />
              <DailyForecast 
                daily={weatherData.daily}
                onDaySelect={setSelectedDate}
                selectedDate={selectedDate}
              />
            </div>

            {/* Right Side - Hourly Forecast */}
            <div className="lg:col-span-1">
              <HourlyForecast 
                hourly={weatherData.hourly}
                daily={weatherData.daily}
                selectedDate={selectedDate}
                onDateChange={setSelectedDate}
              />
            </div>
          </div>
        )}

        {!selectedLocation && !isLoading && (
          <div className="text-center text-gray-400 text-lg mt-12">
            Search for a location to see the weather forecast
          </div>
        )}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <Provider store={store}>
      <WeatherContent />
    </Provider>
  );
}