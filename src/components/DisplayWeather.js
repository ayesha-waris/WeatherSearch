import classes from './DisplayWeather.module.css';
import OpacityIcon from '@mui/icons-material/Opacity';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import SpeedIcon from '@mui/icons-material/Speed';
import Wrapper from './Wrapper';
import { useSelector } from 'react-redux';
import NotFoundstate from './notFoundState';
import { Fragment } from 'react';
import WeatherList from './WeatherList';
const DisplayWeather = (props) => {

  const currentState = useSelector((state) => state.weather.currentState);
  //console.log(currentState);


  if(currentState.city.length === 0)
  {
    return <NotFoundstate message={'Search Weather in your City!'}/> ;
  }
     

  return ( 

    
<Fragment>
      <Wrapper className={classes.wrapper}> 

        <h1  className={classes.city} >{currentState.city}</h1>
        <h1 className={classes.temp}><DeviceThermostatIcon/> {Math.floor(currentState.list[0].main.feels_like - 273.15)}°C</h1>
        <section className={classes.humidity}>
        <p ><SpeedIcon/>P: {currentState.list[0].main.pressure}</p>
        <p > <OpacityIcon/>H: {currentState.list[0].main.humidity}</p>
        </section>
      
        </Wrapper>
   
      <WeatherList list={currentState.list}/>
      </Fragment>
    
   );
}
 
export default DisplayWeather;