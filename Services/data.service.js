import axios from 'axios'



export const getInfoPokedex = (limit,offset) =>{
  const urlapi =`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  return axios.get(urlapi);
}

export const getInfoPokemon = (urlPokemon)=>{
  return axios.get(urlPokemon);
}

