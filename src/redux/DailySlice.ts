import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Daily {
  id: string;
  writer: string;
  date: string;
  content: string;
  tags: string[];
}

export interface DailyList {
  Daily: Daily[];
}

const prefix = 'daily' as const;

const slice = createSlice({
  name: prefix,
  initialState: [{ id: '1', writer: '1', date: new Date().toISOString(), content: 'test', tags: ['safd'] }] as Daily[],
  reducers: {
    addDaily: (state, action: PayloadAction<Daily>) => {
      console.log('test===> ', action);
      return [...state, action.payload];
    },
  },
});

export default slice;
