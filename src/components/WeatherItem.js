import classes  from './WeatherItem.module.css';
import Wrapper from './Wrapper';
import OpacityIcon from '@mui/icons-material/Opacity';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import SpeedIcon from '@mui/icons-material/Speed';
const WeatherItem = (item) => {

  const time =  new Date(item.item.dt * 1000).toISOString().slice(11, 19);
    // console.log(time);
  return ( 
    
    <Wrapper className={classes.wrapper}> 

    
    <h1 className={classes.temp}><DeviceThermostatIcon/> {Math.floor(item.item.main.feels_like - 273.15)}°C</h1>
    <section className={classes.humidity}>
    <p ><SpeedIcon/>P: {item.item.main.pressure}</p>
    <p > <OpacityIcon/>H: {item.item.main.humidity}</p>
    </section>
    <p className={classes.time}>{time}</p>
  
    </Wrapper>
   );
}
 
export default WeatherItem;