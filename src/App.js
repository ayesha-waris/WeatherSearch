

import { useState } from 'react';
import './App.css';
import DisplayWeather from './components/DisplayWeather';
import Header from './components/Header';
import WeatherList from './components/WeatherList';
import NotFoundstate from './components/notFoundState';


// api.openweathermap.org/data/2.5/forecast?q=newyork&appid=6d479952e2875a0d560200a7a1cbe4fa

function App() {
  const [error, seterror] = useState(false);

const ifError = () => {
seterror(true);
}

const noError = () => {
  seterror(false);
  }
return (
<div className='App'>
  <Header ifError = {ifError} noError={noError}/>
  {!error? <DisplayWeather /> : <NotFoundstate message={'State not found!'}/>}
 
 
</div>
  );
}

export default App;
