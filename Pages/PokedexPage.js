import { StyleSheet, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchPokedex } from '../Data/PokedexSlice';
import PokemonDisplay from '../Component/PokemonDisplay';
import DarkModeComponent from '../Component/DarkModeComponent/DarkModeComponent';

export default function PokedexPage({navigation,route}) {

  const dispatch = useDispatch()

  const area = route.params.area

  const pokedexList = useSelector(state=> state.PokedexData.pokedexList)
  const pokedexFind = pokedexList.find(p=>p.area === area)

  useEffect(()=>{
    if(pokedexFind.pokemonList.length === 0){
      dispatch(FetchPokedex(area))
    }
  },[])

  useLayoutEffect(()=>{
    navigation.setOptions({title:area})
  },[])

  return (
    <DarkModeComponent>
      <FlatList numColumns={3} data={pokedexFind.pokemonList} contentContainerStyle={styles.container}
      renderItem={({item})=>{
        return <PokemonDisplay pokemon={item}/>
      }} keyExtractor={(item,index) => index}/>
    </DarkModeComponent>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent:"center",
    alignItems:"center"
  }
})