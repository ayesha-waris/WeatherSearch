import classes from './SearchBox.module.css';
import { useState } from 'react'; 
import SearchButton from './SearchButton';

const Searchbox = (props) => {


 
  const [typedCity, setTypedCity] = useState('');
const submitHandler = (e) => {
  e.preventDefault();
  props.onSearchHandler(typedCity);
  setTypedCity('');

}
  
  return ( 



    <form type='submit' className={classes.search} onSubmit = {submitHandler}>
      <input type='text'
       placeholder="Search"
       value={typedCity}
       onChange={(e) => setTypedCity(e.target.value)}/>
        <SearchButton onClickHandler = {submitHandler} />
      
    </form>
   );
}
 
export default Searchbox;