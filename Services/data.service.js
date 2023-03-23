import axios from 'axios'



export const getInfoPokedex = async (limit,offset) =>{
  const urlapi =`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  const response = await axios.get(urlapi);
  return response.data
}

export const getInfoPokemon = async (urlPokemon)=>{
  const response = await axios.get(urlPokemon);
  return(response.data)
}

