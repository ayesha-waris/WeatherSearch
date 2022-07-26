import classes from './previousSearch.module.css';
import { useSelector } from 'react-redux';
import NotFoundstate from './notFoundState';
import { Fragment } from 'react';
import Wrapper from './Wrapper';
import WeatherList from './WeatherList';
const PreviousSearch = () => {

  const previousState = useSelector((state) => state.weather.previousState);
  //console.log(currentState);


  if(previousState.city.length === 0)
  {
    return <NotFoundstate message={'No Previously Searched State'}/> ;
  }
  return ( 
    <Fragment>
      <Wrapper className={classes.wrapper}> 
      <h1>Previously Searched State</h1>

        <h1  className={classes.city} >{previousState.city}</h1>
       
       
        </Wrapper>
   
      <WeatherList list={previousState.list}/>
      </Fragment>
    
   );
}
 
export default PreviousSearch;