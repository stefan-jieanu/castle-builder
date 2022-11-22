import { createSlice } from '@reduxjs/toolkit';
import Game from '../game/Game.ts';

const initialState = {
  // color: '#4287f5',
  // hoverColor: '#f54242'
  color: 0xffffff,
  hoverColor: 'blue',
  geometry: [2, 2, 2]
}

const castleConf = createSlice({
  name: 'castle',
  initialState,
  reducers: {
    updateConf: (state, {payload}) => {
      Game.instance.test = payload;
      return {...payload};
    },
  }
});

export const { updateConf } = castleConf.actions;

export default castleConf.reducer;