import DisplayWeather from './DisplayWeather';
import classes from './WeatherList.module.css';
const WeatherList = () => {
  return ( 
   <div className={classes.wrapper}> 
    <DisplayWeather/>
    <DisplayWeather/>
    <DisplayWeather/>
    <DisplayWeather/>
    <DisplayWeather/>
    </div>
   );
}
 
export default WeatherList;