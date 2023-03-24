import AsyncStorage from "@react-native-async-storage/async-storage";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


export const FetchCaptureList = createAsyncThunk(
  "CaptureSlice/FetchCaptureList",
  async()=>{
    const response = await AsyncStorage.getItem('CaptureList')
    if(response != undefined){
      const data = JSON.parse(response)
      return data
    }
  }
)


export const SetCaptureList= createAsyncThunk(
  "CaptureSlice/SetCaptureList",
  async(captureList)=>{
    await AsyncStorage.setItem('CaptureList',JSON.stringify(captureList))
    return captureList
  }
)

const CaptureSlice = createSlice({
  name:"CaptureSlice",
  initialState:{
    captureList:[]
  },
  reducers:{

  },
  extraReducers:(builder)=>{
    builder.addCase(FetchCaptureList.fulfilled,(state,action)=>{
      state.captureList = [...action.payload]
    })

    builder.addCase(SetCaptureList.fulfilled,(state,action)=>{
      state.captureList = [...action.payload]
    })
  }
})

export default CaptureSlice.reducer