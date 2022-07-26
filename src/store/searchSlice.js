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
     console.log(state.currentState.city);
     console.log(state.currentState.list);

   },
    setPreviousState(state) {
      state.previousState = state.currentState

    },
  },
});
export const searchActions = searchSlice.actions;
export default searchSlice;