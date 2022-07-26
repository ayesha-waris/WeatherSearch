
import { Fragment } from 'react';
import './App.css';
import DisplayWeather from './components/DisplayWeather';

import Header from './components/Header';
import WeatherList from './components/WeatherList';


// api.openweathermap.org/data/2.5/forecast?q=newyork&appid=6d479952e2875a0d560200a7a1cbe4fa

function App() {
  return (
<div className='App'>
  <Header/>
 <DisplayWeather/>
 <WeatherList/>
</div>
  );
}

export default App;
