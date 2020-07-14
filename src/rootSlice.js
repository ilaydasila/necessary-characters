import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    hair: "hair5",
    cloth: "cloth2",
    weapon: "weapon3",
    name: null,
  },
  reducers: {
    chooseHair: (state, action) => {
      state.hair = action.payload;
    },
    chooseCloth: (state, action) => {
      state.cloth = action.payload;
    },
    chooseWeapon: (state, action) => {
      state.weapon = action.payload;
    },
    chooseName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const reducer = rootSlice.reducer;
export const {
  chooseCloth,
  chooseHair,
  chooseName,
  chooseWeapon,
} = rootSlice.actions;
