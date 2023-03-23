import { configureStore } from "@reduxjs/toolkit";
import PokedexSlice from "../Data/PokedexSlice";

export const store = configureStore({
  reducer:{
    PokedexData:PokedexSlice
  }
})