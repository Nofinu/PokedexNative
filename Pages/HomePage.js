import { StyleSheet,FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PokedexButton from '../Component/PokedexButton'
import DarkModeComponent from '../Component/DarkModeComponent/DarkModeComponent'
import { getDarkMode } from '../Data/DarkmodeSlice'


export default function HomePage({navigation}) {

  const dispatch = useDispatch()

  const PokedexList = useSelector(state=>state.PokedexData.pokedexList)

  useEffect(()=>{
    dispatch(getDarkMode())
  },[])

  return (
    <DarkModeComponent>
      <FlatList contentContainerStyle={styles.container} data={PokedexList} renderItem={({item})=>{
        return <PokedexButton area={item.area}/>
      }} keyExtractor={(item,index) => index}/>
    </DarkModeComponent>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    justifyContent:"center"
  },
})