import { configureStore } from '@reduxjs/toolkit';

import searchSlice from './searchSlice';

const store = configureStore({
  reducer: { searech: searchSlice.reducer},
});

export default store;