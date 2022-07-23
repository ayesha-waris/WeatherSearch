import { Fragment } from "react";
import classes from './Header.module.css';
import Searchbox from "./SearchBox";
import SearchButton from "./SearchButton";

const Header = () => {
  
  return ( 
    <header className={classes.header}> 
    <Searchbox/>
    <SearchButton/>
    </header>

   );
}
 
export default Header;