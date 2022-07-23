
import { Fragment } from 'react';
import './App.css';
import DisplayWeather from './components/DisplayWeather';

import Header from './components/Header';

const API_KEY = '6d479952e2875a0d560200a7a1cbe4fa';
// api.openweathermap.org/data/2.5/forecast?q=newyork&appid=6d479952e2875a0d560200a7a1cbe4fa

function App() {
  return (
<Fragment >
  <Header/>
 <DisplayWeather/>
</Fragment>
  );
}

export default App;
