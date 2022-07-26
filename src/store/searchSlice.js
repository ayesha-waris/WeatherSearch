import { createSlice } from '@reduxjs/toolkit';



const initialStates= {
  currentState: {
    city:'',
    list: []
  },
  previousState: {
    city:'',
    list: []
  }

};
const searchSlice = createSlice({
  name: 'States',
  initialState: initialStates,
  reducers: {
   setCurrentState(state, action){
     const newState = action.payload;
     state.currentState.city = newState.city;
     state.currentState.list = newState.list;
  

   },
    setPreviousState(state, action) {
      const newState = action.payload;
      state.previousState.city = newState.city;
     state.previousState.list = newState.list;
      console.log(state.previousState.city);

    },
  },
});
export const searchActions = searchSlice.actions;
export default searchSlice;