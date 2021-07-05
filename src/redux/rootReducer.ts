import { combineReducers } from '@reduxjs/toolkit';
import slice from './DailySlice';

const rootReducer = combineReducers({
  daily: slice.reducer,
});

export type ReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
