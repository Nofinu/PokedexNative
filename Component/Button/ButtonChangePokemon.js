import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

export default function ButtonChangePokemon(props) {

  const darkMode = useSelector(state=>state.darkMode.darkModeState)

  return (
    <Pressable style={[styles.container,{backgroundColor: darkMode? "white" : "black" }]} onPress={()=> props.onpress(props.pokemonNumber)}>
      <Text style={[styles.text,{color:darkMode? "black" : "white"}]}>{props.text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  text:{
    fontSize:40,
    marginBottom:15,
  },
  container:{
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
    width:80,
    marginTop:15,
  }
})