import { StyleSheet,FlatList , View} from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PokedexButton from '../Component/PokedexButton'
import { setPokedexList } from '../Data/PokedexSlice'
import { REGION } from '../Data/data'

export default function HomePage() {

  const dispatch = useDispatch()

  const PokedexList = useSelector(state=>state.PokedexData.pokedexList)
  const tabRegion = [...REGION]

  useEffect(()=>{
    dispatch(setPokedexList({region:tabRegion}))
  },[])

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