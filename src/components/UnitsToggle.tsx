'use client';

import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Settings } from 'lucide-react';
import { UnitSystem } from '../types/weather';

interface UnitsToggleProps {
  units: UnitSystem;
  onUnitsChange: (units: UnitSystem) => void;
}

export const UnitsToggle = ({ units, onUnitsChange }: UnitsToggleProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className="bg-slate-800/50 border-slate-700 text-white hover:bg-slate-700/50"
        >
          <Settings className="w-4 h-4 mr-2" />
          Units
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-slate-800 border-slate-700">
        <DropdownMenuItem 
          onClick={() => onUnitsChange('metric')}
          className={`text-white hover:bg-slate-700 ${units === 'metric' ? 'bg-slate-700' : ''}`}
        >
          Metric (°C, km/h, mm)
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => onUnitsChange('imperial')}
          className={`text-white hover:bg-slate-700 ${units === 'imperial' ? 'bg-slate-700' : ''}`}
        >
          Imperial (°F, mph, in)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};