import classes from './DisplayWeather.module.css';

import Bar from './Bar';


const DisplayWeather = () => {



  return ( 

    <div className={classes.weather}>
      
      <Bar data={[20,30,48]} state={"manchester"} />
      {/* <Bar height={20} color={'blue'}/>
      <Bar height={30} color={'green'}/>
      <Bar height={10}/> */}
     
    </div>
   );
}
 
export default DisplayWeather;