
import classes from './SearchButton.module.css';
import Search from '@mui/icons-material/Search';
const SearchButton = (props) => {


  return (  
    <button onClick = {props.onClickHandler}  className={classes.button}>
      <Search  />
    </button>
  );
}
 
export default SearchButton;