import { 
  Sun, 
  Cloud, 
  CloudRain, 
  CloudSnow, 
  Zap, 
  CloudDrizzle,
  Cloudy,
  Wind
} from 'lucide-react';

export const getWeatherIcon = (weatherCode: number, size: number = 24) => {
  const iconProps = { size, className: "text-yellow-400" };
  
  switch (weatherCode) {
    case 0:
      return <Sun {...iconProps} />;
    case 1:
    case 2:
      return <Cloud {...iconProps} className="text-gray-300" />;
    case 3:
      return <Cloudy {...iconProps} className="text-gray-400" />;
    case 45:
    case 48:
      return <Wind {...iconProps} className="text-gray-400" />;
    case 51:
    case 53:
    case 55:
      return <CloudDrizzle {...iconProps} className="text-blue-400" />;
    case 56:
    case 57:
      return <CloudSnow {...iconProps} className="text-blue-200" />;
    case 61:
    case 63:
    case 65:
      return <CloudRain {...iconProps} className="text-blue-500" />;
    case 66:
    case 67:
      return <CloudSnow {...iconProps} className="text-blue-300" />;
    case 71:
    case 73:
    case 75:
    case 77:
      return <CloudSnow {...iconProps} className="text-white" />;
    case 80:
    case 81:
    case 82:
      return <CloudRain {...iconProps} className="text-blue-600" />;
    case 85:
    case 86:
      return <CloudSnow {...iconProps} className="text-blue-100" />;
    case 95:
    case 96:
    case 99:
      return <Zap {...iconProps} className="text-yellow-500" />;
    default:
      return <Sun {...iconProps} />;
  }
};

export const getWeatherDescription = (weatherCode: number): string => {
  switch (weatherCode) {
    case 0: return 'Clear sky';
    case 1: return 'Mainly clear';
    case 2: return 'Partly cloudy';
    case 3: return 'Overcast';
    case 45: return 'Fog';
    case 48: return 'Depositing rime fog';
    case 51: return 'Light drizzle';
    case 53: return 'Moderate drizzle';
    case 55: return 'Dense drizzle';
    case 56: return 'Light freezing drizzle';
    case 57: return 'Dense freezing drizzle';
    case 61: return 'Slight rain';
    case 63: return 'Moderate rain';
    case 65: return 'Heavy rain';
    case 66: return 'Light freezing rain';
    case 67: return 'Heavy freezing rain';
    case 71: return 'Slight snow fall';
    case 73: return 'Moderate snow fall';
    case 75: return 'Heavy snow fall';
    case 77: return 'Snow grains';
    case 80: return 'Slight rain showers';
    case 81: return 'Moderate rain showers';
    case 82: return 'Violent rain showers';
    case 85: return 'Slight snow showers';
    case 86: return 'Heavy snow showers';
    case 95: return 'Thunderstorm';
    case 96: return 'Thunderstorm with slight hail';
    case 99: return 'Thunderstorm with heavy hail';
    default: return 'Unknown';
  }
};