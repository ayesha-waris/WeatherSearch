
import classes from './Header.module.css';
import Searchbox from "./SearchBox";
import SearchButton from "./SearchButton";
import { searchWeather } from '../store/search-action';
import axios from 'axios';

const Header = () => {
  const requestSearch = (state) =>{
    axios({
     
      url: `https://api.openweathermap.org/data/2.5/forecast?q=${state},US&appid=6d479952e2875a0d560200a7a1cbe4fa`
      
    }).then((response) => {
      console.log(response.data);
     
    });
  }

  const onSearchHanlder = (state) => {

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