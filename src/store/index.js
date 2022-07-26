import { configureStore } from '@reduxjs/toolkit';

import searchSlice from './searchSlice';

const store = configureStore({
  reducer: { weather: searchSlice.reducer},
});

export default store;