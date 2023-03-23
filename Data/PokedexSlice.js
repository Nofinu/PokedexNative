import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Pokedex } from "../Classes/PokedexClass";


// export const FetchPokedex = createAsyncThunk(
//   "PokedexSlice/FetchPokedex",
//   async(area,{getState})=>{
//     // const pokedexList = getState().PokedexData.pokedexList
//     // console.log(pokedexList)
//   }
// )

const PokedexSlice = createSlice({
  name:"PokedexSlice",
  initialState:{
    pokedexList:[],
    Pokedex1Catch:[]
  },
  reducers:{
    setPokedexList(state,action){
      state.pokedexList = [...action.payload.region]
    }
  }
})

export const {setPokedexList} = PokedexSlice.actions

export default PokedexSlice.reducer