import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import DarkModeComponent from '../Component/DarkModeComponent/DarkModeComponent'
import PokemonCapturedDisplay from '../Component/PokemonCapturedDisplay'

export default function CapturedPage() {

const capturedList = useSelector(state => state.captureList.captureList)

  return (
    <DarkModeComponent>
      {
        capturedList.length !==0 &&
      <FlatList numColumns={3} data={capturedList} contentContainerStyle={styles.container}
      renderItem={({item})=>{
        return <PokemonCapturedDisplay pokemon={{...item,url:`https://pokeapi.co/api/v2/pokemon/${item.number}/`}}/>
      }} keyExtractor={(item,index) => index}/>
      }
    </DarkModeComponent>
  )
}


const styles = StyleSheet.create({})