'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Search } from 'lucide-react';
import { useSearchLocationsQuery } from '../store/weatherApi';
import { Location } from '../types/weather';

interface SearchBarProps {
  onLocationSelect: (location: Location) => void;
}

export const SearchBar = ({ onLocationSelect }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  
  const { data: locations = [] } = useSearchLocationsQuery(searchTerm, {
    skip: searchTerm.length < 2,
  });

  const handleSearch = () => {
    if (locations.length > 0) {
      onLocationSelect(locations[0]);
      setSearchTerm('');
      setShowResults(false);
    }
  };

  const handleLocationClick = (location: Location) => {
    onLocationSelect(location);
    setSearchTerm('');
    setShowResults(false);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search for a place..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowResults(true);
            }}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder-gray-400 focus:border-blue-500"
          />
        </div>
        <Button 
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6"
        >
          Search
        </Button>
      </div>
      
      {showResults && searchTerm.length >= 2 && locations.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-slate-800 border border-slate-700 rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => handleLocationClick(location)}
              className="w-full px-4 py-2 text-left text-white hover:bg-slate-700 transition-colors"
            >
              <div className="font-medium">{location.name}</div>
              <div className="text-sm text-gray-400">
                {location.admin1 && `${location.admin1}, `}{location.country}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};