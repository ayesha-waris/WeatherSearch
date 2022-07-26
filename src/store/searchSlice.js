import { createSlice } from '@reduxjs/toolkit';



const initialStates= {
  currentState: {},
  previousState: {}

};
const searchSlice = createSlice({
  name: 'States',
  initialState: initialStates,
  reducers: {
   setCurrentState(state, action){
     state.currentState =action.payload.currentState

   },
    setPreviousState(state) {
      state.previousState = state.currentState

    },
  },
});
export const searchActions = searchSlice.actions;
export default searchSlice;