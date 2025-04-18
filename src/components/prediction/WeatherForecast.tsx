import React from 'react';
import { Card } from '../../components/ui/card';
import { Sun, Cloud, CloudRain } from 'lucide-react';

const WeatherForecast = () => {
  const forecast = [
    { day: 'Today', temp: 32, icon: Sun, condition: 'Sunny' },
    { day: 'Tomorrow', temp: 30, icon: Cloud, condition: 'Cloudy' },
    { day: 'Wed', temp: 28, icon: CloudRain, condition: 'Rain' },
  ];

  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">Weather Forecast</h3>
      <div className="grid grid-cols-3 gap-4">
        {forecast.map((day) => (
          <div key={day.day} className="text-center">
            <p className="text-sm text-gray-600">{day.day}</p>
            <day.icon className="w-8 h-8 mx-auto my-2 text-orange-500" />
            <p className="font-semibold">{day.temp}°C</p>
            <p className="text-sm text-gray-600">{day.condition}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default WeatherForecast;