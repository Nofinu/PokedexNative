import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage'

export const getDarkMode = createAsyncThunk(
  "DarkModeSlice/getDarkMode",
  async()=>{
    const response = await AsyncStorage.getItem('Darkmode')
    console.log(response)
    const data = JSON.parse(response)
    console.log(data)
    return(data)
  }
)


export const setDarkMode = createAsyncThunk(
  "DarkModeSlice/setDarkMode",
  async(data)=>{
    await AsyncStorage.setItem('Darkmode',JSON.stringify(data))
    return data
  }
)

const DarkModeSlice = createSlice({
  name:"DarkModeSlice",
  initialState:{
    darkModeState:false
  },
  reducers:{

  },
  extraReducers:(builder)=>{
    builder.addCase(getDarkMode.fulfilled,(state,action)=>{
      state.darkModeState = action.payload
    })
    builder.addCase(setDarkMode.fulfilled,(state,action)=>{
      state.darkModeState = action.payload
    })
  }
})


export default DarkModeSlice.reducer