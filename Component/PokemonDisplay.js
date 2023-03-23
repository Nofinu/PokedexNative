import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getInfoPokemon } from '../Services/data.service'

export default function PokemonDisplay({pokemon}) {

  const [pokemonPics, setPokemonpics]=useState("")

  const fetchPokemonInfo = async ()=>{
    const response = await getInfoPokemon(pokemon.url)
    setPokemonpics(response.sprites.front_default)
  }

  useEffect(()=>{
    if(pokemonPics === ""){
      fetchPokemonInfo()
    }
  },[pokemonPics])

  return (
    <View style={styles.container}>
      {
      pokemonPics !="" ?
      <Image source={{uri:pokemonPics}} style={{width:120,height:120}}/>
      :
        <ActivityIndicator/>
      }
      <View style={styles.textContainer}>
        <Text style={styles.text}>{pokemon.name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    borderColor:"red",
    borderWidth:3,
    borderRadius:10,
    marginTop:5,
    marginLeft:5,
    justifyContent:"space-around",
  },
  textContainer:{
    height:35,
    backgroundColor:"red",
    justifyContent:"center"
  },
  text:{
    color:"white",
    width:"100%",
    textAlign:"center",
    fontSize:20,
  }
})