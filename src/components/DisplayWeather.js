import classes from './DisplayWeather.module.css';
import OpacityIcon from '@mui/icons-material/Opacity';
import Bar from './Bar';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import SpeedIcon from '@mui/icons-material/Speed';
import Wrapper from './Wrapper';
const DisplayWeather = (props) => {



  return ( 

    

    <Wrapper className={classes.wrapper}> 

        <h1  className={classes.city} >Manchester</h1>
        <h1 className={classes.temp}><DeviceThermostatIcon/> 42°</h1>
        <section className={classes.humidity}>
        <p ><SpeedIcon/>Pressure</p>
        <p > <OpacityIcon/> Humidity</p>
        </section>
      
        </Wrapper>
      
     
     
    
   );
}
 
export default DisplayWeather;