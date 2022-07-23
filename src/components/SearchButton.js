
import classes from './SearchButton.module.css';
import Search from '@mui/icons-material/Search';
const SearchButton = () => {
  return (  
    <button  className={classes.button}>
      <Search/>
    </button>
  );
}
 
export default SearchButton;