import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getInfoPokedex } from "../Services/data.service";


export const FetchPokedex = createAsyncThunk(
  "PokedexSlice/FetchPokedex",
  async(area,{getState})=>{
    const pokedexList = getState().PokedexData.pokedexList
    const pokedexFind = pokedexList.find(pokedex => pokedex.area === area)
    const response = await getInfoPokedex(pokedexFind.limit,pokedexFind.offset)
    return {data:response,area:area}
  }
)

const PokedexSlice = createSlice({
  name:"PokedexSlice",
  initialState:{
    pokedexList:[  
      {id:1,area:'kanto',limit:'151',offset:'0',pokemonList:[]},
      {id:2,area:'Johto',limit:'100',offset:'151',pokemonList:[]},
      {id:3,area:'Hoenn',limit:'135',offset:'251',pokemonList:[]},
      {id:4,area:'Sinnoh',limit:'107',offset:'386',pokemonList:[]},
      {id:5,area:'Unys',limit:'156',offset:'493',pokemonList:[]},
      {id:6,area:'Kalos',limit:'72',offset:'649',pokemonList:[]},
      {id:7,area:'Alola',limit:'88',offset:'721',pokemonList:[]},
      {id:8,area:'Galar/Hisui',limit:'96',offset:'809',pokemonList:[]},
      {id:9,area:'Paldea',limit:'105',offset:'905',pokemonList:[]}
    ],
    Pokedex1Catch:[]
  },
  reducers:{

  },
  extraReducers:(builder)=>{
    builder.addCase(FetchPokedex.fulfilled,(state,actions)=>{
      const areaFind = actions.payload.area
      const pokedexFind = state.pokedexList.find(p => p.area === areaFind)
      if(pokedexFind){
        pokedexFind.pokemonList=[...actions.payload.data.results]
        state.pokedexList = [...state.pokedexList.filter(p => p.area !== areaFind),pokedexFind].sort((a,b)=>a.id-b.id)
      }
    })
  }
})

export const {setPokedexList} = PokedexSlice.actions

export default PokedexSlice.reducer