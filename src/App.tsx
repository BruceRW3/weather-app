import {FC, useState} from 'react';
import './App.css';
import {LocationSearch} from './components/LocationSearch';
import {LocationTable} from './components/LocationTable';
import { WeatherSummary } from './components/WeatherSummary';
import { WeatherLocation } from './model/Weather';
import { searchLocation } from './services/WeatherService';
import {ErrorAlert, WarningAlert} from './components/Alerts'


const App: FC = () => {
  const [currentLocation, setCurrentLocation] = useState<WeatherLocation | null>(null);
  const [locations, setLocations] = useState<WeatherLocation[]>([])
  const [error, setError] = useState('');
  const [warning, setWarning] = useState('');

  const resetAlerts = () => {
    setError('');
    setWarning('');
  }
  
  async function addLocation(term: string): Promise<void> {
    resetAlerts();
    const location = await searchLocation(term);

    if (!location) {
      setError(`No location found called '${term}'`);
    } else if (locations.find(item => item.id === location.id)) {
      setWarning(`Location '${term}' is already in the list.`);
    } else {
      setLocations([location, ...locations]);
    }
  }

  return (
    <div className='container'>
      <h1>Weather App</h1>
      
      <LocationSearch onSearch={addLocation} />
      <ErrorAlert message={error} />
      <WarningAlert message={warning} />
      <LocationTable locations={locations} 
                      current={null} 
                      onSelect={location => setCurrentLocation(location)}/>

      <WeatherSummary location={currentLocation}/>
    </div>
  );
}

export default App;
