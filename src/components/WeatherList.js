
import WeatherItem from './WeatherItem';
import classes from './WeatherList.module.css';
const WeatherList = (list) => {
  console.log(list);
  return ( 
   <div className={classes.wrapper}> 
   {
   list.list.map((item, num) => (
    <WeatherItem  key={num} item={item}/>
   ))
}

    </div>
   );
}
 
export default WeatherList;