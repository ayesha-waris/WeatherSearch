import classes  from './WeatherItem.module.css';
import Wrapper from './Wrapper';
import OpacityIcon from '@mui/icons-material/Opacity';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import SpeedIcon from '@mui/icons-material/Speed';
const WeatherItem = () => {
  return ( 
    <Wrapper className={classes.wrapper}> 

    
    <h1 className={classes.temp}><DeviceThermostatIcon/> 42°</h1>
    <section className={classes.humidity}>
    <p ><SpeedIcon/>P</p>
    <p > <OpacityIcon/>H</p>
    </section>
    <p className={classes.time}>Time</p>
  
    </Wrapper>
   );
}
 
export default WeatherItem;