import { Fragment } from "react";
import classes from './Header.module.css';
import Searchbox from "./SearchBox";
import SearchButton from "./SearchButton";

const Header = () => {
  
  return ( 
    <header className={classes.header}> 
  
    <h1>Weather App</h1>
   
   

    <section className={classes.search}> 
    <Searchbox/>
    <SearchButton/>
    </section>
    </header>

   );
}
 
export default Header;