import { StyleSheet,FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import PokedexButton from '../Component/PokedexButton'


export default function HomePage() {

  const PokedexList = useSelector(state=>state.PokedexData.pokedexList)

  return (
    <FlatList contentContainerStyle={styles.container} data={PokedexList} renderItem={({item})=>{
      return <PokedexButton area={item.area}/>
    }} keyExtractor={(item,index) => index}/>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    justifyContent:"center"
  }
})