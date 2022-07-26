
import classes from './Header.module.css';
import React from 'react';
import Searchbox from "./SearchBox";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchActions } from '../store/searchSlice';


const Header = (props) => {

  const dispatch = useDispatch();
  const currentState = useSelector((state) => state.weather.currentState);

  const requestSearch = async (state) =>{
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${state},US&appid=6d479952e2875a0d560200a7a1cbe4fa`);
  
      if (!response.ok) {
        throw new Error('Request failed!');
      }
  
      const data = await response.json();

      const {city, list } = {...data};
      dispatch(searchActions.setCurrentState({
        city: city,
        list: list,
      }))

    

     // console.log(data);
      props.noError();

  
  
    
    } catch (err) {
      props.ifError();
      console.log(err.message );
    }
   
    // axios({
     
    //   url: `https://api.openweathermap.org/data/2.5/forecast?q=${state},US&appid=6d479952e2875a0d560200a7a1cbe4fa`
      
    // }).then((response) => {
    //   console.log(response);
     
    // });
  }

 
  const onSearchHanlder = (state) => {
    if(currentState.city.length !== 0)
    {
      dispatch(searchActions.setPreviousState({
        city: currentState.city,
        list: currentState.list,
      }))
    }
    requestSearch(state);
  
    

  }


  return ( 
    <header className={classes.header}> 
  
    <h1>Weather App</h1>
   
   

    <section className={classes.search}> 
    <Searchbox onSearchHandler = {onSearchHanlder} />
    
    </section>
    </header>

   );
}
 
export default Header;