



import {searchActions} from "./searchSlice";



export const searchWeather = (state) => {
  
  return async (dispatch) => {
 
    const sendRequest = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${state},US&appid=6d479952e2875a0d560200a7a1cbe4fa`
      );

      if (!response.ok) {
        throw new Error('Error requesting weather');
      }
      else{
        console.log(response)
      }
      const data = await response.json();
      console.log(data)
    return data;
    };
    console.log("hi");
    try {
      console.log(state);
      const data = await sendRequest();
      console.log(data)
      // dispatch(
      //  searchActions.setCurrentState(res)
      // );
    } catch (error) {
      console.log("not found")
  
    }
  };
};