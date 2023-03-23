import { configureStore } from "@reduxjs/toolkit";
import DarkmodeSlice from "../Data/DarkmodeSlice";
import PokedexSlice from "../Data/PokedexSlice";


export const store = configureStore({
  reducer:{
    PokedexData:PokedexSlice,
    darkMode:DarkmodeSlice
  }
})