import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // color: '#4287f5',
  // hoverColor: '#f54242'
  color: 'red',
  hoverColor: 'blue',
  geometry: [2, 2, 2]
}

const castleConf = createSlice({
  name: 'castle',
  initialState,
  reducers: {
    updateConf: (state, {payload}) => {
      return {...payload};
    },
  }
});

export const { updateConf } = castleConf.actions;

export default castleConf.reducer;