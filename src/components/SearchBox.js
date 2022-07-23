import classes from './SearchBox.module.css';
import { useState } from 'react'; 
const Searchbox = () => {

  const [typedCity, setTypedCity] = useState('');
  return ( 



    <form type='submit' className={classes.search}>
      <input type='text'
       placeholder="Search"
       value={typedCity}
       onChange={(e) => setTypedCity(e.target.value)}/>

      
    </form>
   );
}
 
export default Searchbox;