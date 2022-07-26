import classes from './notFoundState.module.css';
const NotFoundstate = (props) => {
  return ( 
    <div className={classes.wrapper}>
      <h1>{props.message}</h1>
    </div>
   );
}
 
export default NotFoundstate;